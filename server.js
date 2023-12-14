const express = require("express")

const app = express()


app.get('/',(req,res) => {
    res.send("Home Page")
})


app.get('/pokemon',(req,res) => {
    res.render("Index")
})







app.listen("3000",(req,res) => {
    console.log("Server is up and running in port 3000")
})