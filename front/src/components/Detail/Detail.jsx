import styles from "./Detail.module.css";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
export default function Detail(props){
    console.log(useParams())
    const {id } = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key={jarp1994}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);
    return (
        <div className={styles.allDetails}>
            <h1 className={styles.title}>Detail</h1>
            <div className={styles.details}>
                <h2>{character.name}</h2>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                {character.origin && <h2>{character.origin.name}</h2>}
                <img src={character.image} alt='Image not found'/>
            </div>
        </div>
    )
    
}