export default function validation(inputs){
    const errors = {};
    const regexpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const regexPass = new RegExp("[0-9]");

    if(!regexpEmail.test(inputs.username)){  
        errors.username = 'Name must a valid email'
    }
    if(!inputs.username){
        errors.password = 'Name is mandatory'
    }
    if(inputs.username.length > 35){
        errors.password = 'Max 35 characters'
    }
    if(!regexPass.test(inputs.password)){
        errors.password = 'Needs at least 1 number'
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = 'Password needs to be between 6 and 10 characters'
    } 
    return errors
}