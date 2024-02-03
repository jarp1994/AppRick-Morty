import SearchBar from "../SearchBar/SearchBar"
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


export default function NavBar(props) {
    return (
       <div className={styles.containerSearch}>
        <h1>Rick && Morty Cards</h1>
        <NavLink to="/home">
         <button className={styles.home}>Home</button>
        </NavLink>
        <NavLink to="/about">
         <button className={styles.about}>About</button>
         </NavLink>
        <SearchBar onSearch={props.onSearch} />
        
       </div>
    );
 }