// ejercicio 3 express
const users = require('../utils/users');
function login(req, res) {
    const { email, password } = req.query;
    for(const user of users){
        if (user.email === email && user.password === password){
            res.status(200).json({access: true});
        }else{
            res.status(403).json({access: false, message: "Access denied"});
        }
    }
}
 


module.exports= {login};