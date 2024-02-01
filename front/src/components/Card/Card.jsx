import styles from "./Card.module.css";
export default function Card({id,name,status,species,gender,origin,image, onClose}) {
    return (
       <div className={styles.container}>
         <div className={styles.buttonContainer} >
            <button className={styles.button}  onClick={onClose}>X</button>
         </div>
            <div className={styles.wrapperText}>
               <div className={styles.cardContent}>
                  <h1 className={styles.name} >{name}</h1>
                  <ul className={styles.details} >
                     <li>{status}</li>
                     <li>{species}</li>
                     <li>{gender}</li>
                     <li>{origin.name}</li>
                  </ul>
               </div>
            </div>
         <img src={image} alt='Image not found' />
       </div>

    );
 }