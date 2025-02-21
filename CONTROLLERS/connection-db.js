let mysql = require("mysql");

let conexion = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Fastnet#98",
    database:"generic",
    port:3307
}); 

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Conexion exitosa")
    }
});



