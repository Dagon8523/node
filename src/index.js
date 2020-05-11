var http = require("http");
var {countries} = require("countries-list");
var url= require("url");


var server = http.createServer((Request,Response)=>{
    var parsed = url.parse(Request.url)
})

server.listen(4000);
console.log("corriendo por el puerto 4000");


