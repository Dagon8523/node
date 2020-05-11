const express = require("express");
const {info,error} = require("./modules/my-log");
const {countries} = require("countries-list");

const app=server();

app.get('/',function(Request,Response){
    Response.status(200).send("Hola esta es la pagina principal");
});


app.listen(4000,function(){
    console.log("corriendo por el puerto 4000");
 });

 


