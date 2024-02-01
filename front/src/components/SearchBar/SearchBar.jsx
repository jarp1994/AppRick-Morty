import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
    return (
       <div className={styles.containerSearch}>
          <input type='search' />
          <button onClick={()=>{onSearch}}>Agregar</button>
       </div>
    );
 }