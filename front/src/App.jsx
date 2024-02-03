import { useState } from "react";
import "./App.css";
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import axios from "axios";
import {Routes,Route} from "react-router-dom";

function App() {
// ejercicio 3 de la hw react estados
   const [characters,setCharacters] = useState([]);
   
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

   return (
      <div>
         <NavBar onSearch={onSearch}/>
         <hr/>
         <Routes>
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
