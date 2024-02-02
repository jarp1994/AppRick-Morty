import styles from "./Card.module.css";
export default function Card(props) {
    return (
       <div className={styles.container}>
         <div className={styles.buttonContainer} >
            <button className={styles.button}  
            onClick={props.onClose}>X</button>
         </div>
            <div className={styles.wrapperText}>
               <div className={styles.cardContent}>
                  <h1 className={styles.name} >
                     {props.name}
                  </h1>
                  <ul className={styles.details} >
                     <li>{props.status}</li>
                     <li>{props.species}</li>
                     <li>{props.gender}</li>
                     <li>{props.origin.name}</li>
                  </ul>
               </div>
            </div>
         <img src={props.image} alt='Image not found' />
       </div>

    );
 }