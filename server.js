const express = require("express")

const app = express()


app.get('/',(req,res) => {
    res.send("<h1>WELCOME TO THE POKEMON APP</h1>")
})


app.get('/pokemon',(req,res) => {
    res.render("Index")
})







app.listen("3000",(req,res) => {
    console.log("Server is up and running in port 3000")
})