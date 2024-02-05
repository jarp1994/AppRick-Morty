import styles from "./Form.module.css";
import validation from "./validation";
import { useState } from "react";

export default function form(props){

//ejercicio 3 hw reac forms
const [userData, setUserData] = useState({
    username:"",
    password:""
 });

const[errors,setErrors] = useState({
    username:"",
    password:""
 })


 const handleInputChange = (event)=>{
    const {name,value} = event.target;
    setUserData({
        ...userData,
        [name]: value
    })
    setErrors(
        validation({
            ...userData,
            [name]: value
        })
    )
 }
 // ejercicio 6 react forms
const handleSubmit = (event)=>{
    event.preventDefault();
    props.login(userData)
}

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <img className={styles.img} src="https://motionbgs.com/i/c/364x205/media/3258/rick-and-morty-in-parallel-universe.jpg"alt='Image not found' />
            <label className={styles.label}>Username:</label>
            <input className={styles.input}
            type="text" 
            name="username" 
            placeholder='Escribe tu username...'
            value={userData.username}
            onChange={handleInputChange}>
            </input>
            <p className={styles.error}>{errors.username && errors.username} </p>
            <label className={styles.label}>Password:</label>
            <input className={styles.input}
             type="password" 
             name="password" 
             placeholder='Escribe tu password...'
             value={userData.password}
             onChange={handleInputChange}>                
             </input>
            <p className={styles.error}>{errors.password && errors.password} </p>
            <button className={styles.button}>Submit</button>
        </form>
    )
}