const express = require("express")

const app = express()

const pokemondata = require('./models/pokemon.js')


app.get('/',(req,res) => {
    res.send("<a href=/pokemon><h1>WELCOME TO THE POKEMON APP</h1></a>")
})


app.get('/pokemon',(req,res) => {
    res.send(pokemondata)
})










app.listen("3000",(req,res) => {
    console.log("Server is up and running in port 3000")
})