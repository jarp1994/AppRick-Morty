import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {

//ejercicio 6 react estados
const [character,setCharacter] = useState("");
const handleChange = event =>{
 const {value}= event.target;
 setCharacter(value);
}

    return (
       <div className={styles.containerSearch}>
          <input 
          type='search' 
          name="search"
          id="search"
          onChange={handleChange}
          />
          <button onClick={()=> props.onSearch(character)}>Agregar</button>
       </div>
    );
 }