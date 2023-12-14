import React from 'react'

function Show(props) {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Gotta Catch 'Em All"</h1>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"3rem"}}> 
        <h2>{props.poke.name.charAt(0).toUpperCase()+props.poke.name.substring(1)}</h2>
        <img style={{width:"200px",height:"200px"}} src={props.poke.img+".jpg"}></img>
        <a href="/pokemon">Back</a>
    </div>
    
    </>
  )
}

export default Show