const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Servidor 1 listo en puerto: 3000");
})

app.get('/',function(req,res){
    res.send('Hola Redes 2 - 1')
})