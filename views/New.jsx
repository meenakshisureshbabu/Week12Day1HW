import React from 'react'
import ShowAllPokemonGrid from './ShowAllPokemonGrid'

function New(props) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"5rem"}}>
        <h1 style={{textAlign:"center"}}>Create New PokeMon</h1>
        <div>
            <form action='/pokemon' method='POST' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"3em"}}>
                Name of Pokemon : <input type = "text" name="name"></input>
                Image URL : <input type = "text" name="img"></input>
                <input type="submit" name="" value="Create pokemon"></input>
            </form>
        </div>
        <ShowAllPokemonGrid data={props.data}/>
    </div>
  )
}

export default New