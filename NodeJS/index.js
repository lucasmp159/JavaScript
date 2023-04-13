const express = require('express')
const app = express()

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html")
})

app.get("/contato.html", function(request, response){
    response.sendFile(__dirname + "/contato.html")
})

app.listen(3000, function(){
    console.log("SERVER ON")
})