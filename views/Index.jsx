import React from 'react'

function Index(props) {
  return (
    <div>
        <h1>SEE ALL THE POKEMON!</h1>
        <h3><a href="/pokemon/new">Create New Pokemon</a></h3>
        <ul>
            {
                props.data.map((poke,i) => {
                    return (
                        <li style={{lineHeight:"4em",fontSize:"20px"}}><a href={`/pokemon/${i}`}>{poke.name.charAt(0).toUpperCase()+poke.name.substring(1)}</a></li>
                    )
                })
            }
            
        </ul>
    </div>
  )
}

export default Index