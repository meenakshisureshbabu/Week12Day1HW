const express = require("express")

const app = express()

const pokemondata = require('./models/pokemon.js')

app.set("view engine","jsx");
app.engine("jsx",require("express-react-views").createEngine())

app.get('/',(req,res) => {
    res.send("<a href=/pokemon><h1>WELCOME TO THE POKEMON APP</h1></a>")
})


app.use(express.urlencoded({extended:false}))
app.use((req,res,next) => {
    next()
})

app.get('/pokemon',(req,res) => {
    res.render('Index',{
        data:pokemondata}
        )
})


app.get('/pokemon/:indexOfPokemon',(req,res) => {
    res.render("Show",{
       poke:pokemondata[req.params.indexOfPokemon] 
    })
})







app.listen("3000",(req,res) => {
    console.log("Server is up and running in port 3000")
})