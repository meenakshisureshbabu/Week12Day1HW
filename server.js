const express = require("express")

const app = express()

const pokemondata = require('./models/pokemon.js')

app.set("view engine","jsx");
app.engine("jsx",require("express-react-views").createEngine())

app.use(express.urlencoded({extended:false}))
app.use((req,res,next) => {
    next()
})

app.get('/',(req,res) => {
    res.send("<a href=/pokemon><h1 style=text-align:center>WELCOME TO THE POKEMON APP</h1></a>")
})




app.get('/pokemon',(req,res) => {
    res.render('Index',{
        data:pokemondata}
        )
})

app.get('/pokemon/new',(req,res) => {
    res.render("New",{
        data:pokemondata
    })
})

// app.get("/pokemon/showall",(req,res) => {
//     res.render("ShowAllPokemonGrid",{
//         data:pokemondata
//     })
// })


app.get('/pokemon/:indexOfPokemon',(req,res) => {
    res.render("Show",{
       poke:pokemondata[req.params.indexOfPokemon] 
    })
})




app.post("/pokemon",(req,res) => {
    pokemondata.push(req.body)
    res.redirect("/pokemon")
})










app.listen("3000",(req,res) => {
    console.log("Server is up and running in port 3000")
})