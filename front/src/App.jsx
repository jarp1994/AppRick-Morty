import { useState } from "react";
import "./App.css";
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import axios from "axios";

function App() {
// ejercicio 3 de la hw react estados
   const [characters,setCharacters] = useState([]);
   
// puede ser cualquier cosa: data o event etc.. ejercicio 4 hw react estados
function onSearch(id) {
   axios(`https://rym2.up.railway.app/api/character/${id}?key={jarp1994}`).then(
      ({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }
   );
}


const onClose = (id)=>{
   setCharacters(characters.filter(character => character.id !== id))
}

   return (
      <div className='App'style={{padding:"25px"}}>
         <div>
         <NavBar onSearch={onSearch}/>
         </div>
         <div>
         <Cards characters={characters} onClose={onClose} />
         </div> 
        
      </div>
   );
}

export default App;
