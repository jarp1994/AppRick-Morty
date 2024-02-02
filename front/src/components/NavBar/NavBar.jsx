import SearchBar from "../SearchBar/SearchBar"
import styles from "./NavBar.module.css";


export default function NavBar(props) {
    return (
       <div className={styles.containerSearch}>
        <h1>Rick && Morty Cards</h1>
        <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }