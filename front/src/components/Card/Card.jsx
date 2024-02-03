import styles from "./Card.module.css";
import {Link} from "react-router-dom";
export default function Card(props) {
    return (
       <div className={styles.container}>
         <div className={styles.buttonContainer} >
            <button className={styles.button}  
            onClick={props.onClose}>X</button>
         </div>
               <div className={styles.wrapperText}>
                  <Link to={`/detail/${props.id}`}>
                     <h1 className={styles.name} >
                     {props.name}
                     </h1>
                     <ul className={styles.details} >
                        <li>{props.status}</li>
                        <li>{props.species}</li>
                        <li>{props.gender}</li>
                        <li>{props.origin.name}</li>
                     </ul>
                  </Link>
               </div>
         <img src={props.image} alt='Image not found' />
       </div>

    );
 }