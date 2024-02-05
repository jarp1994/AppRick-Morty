import { useState,useEffect} from "react";
import "./App.css";
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
import {Routes,Route, useLocation,useNavigate} from "react-router-dom";

function App() {
// ejercicio 3 de la hw react estados
   const [characters,setCharacters] = useState([]);
// ejercicio 5 react forms
   const [access, setAccess] = useState(false);
   const username = "ft45b@gmail.com";
   const password = "123456"
   const navigate = useNavigate();
   
   
   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
// puede ser cualquier cosa: data o event etc.. ejercicio 4 hw react estados
function onSearch(id) {
   if(characters.find(character=>character.id === Number(id))){
      window.alert("Este personaje ya esta en pantalla")
   }else{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
            } 
         }
      )
   }
   ;
}


const onClose = (id)=>{
   setCharacters(characters.filter(character => character.id !== id))
}
// para que la navbar no se muestre cuando este el formulario
const location = useLocation();




   return (
      <div>
         {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
         <hr/>
         <Routes>
            <Route exact path="/" element={<Form login={login} />} 
            />
            <Route path="/about"element={<About/>}/>
            <Route path="/home"element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
