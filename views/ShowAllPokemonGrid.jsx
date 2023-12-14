import React from 'react'



function ShowAllPokemonGrid(props) {
  return (
    <div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
                props.data.map((singledata) => {
                    return (
                        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",width:"25%",border:"solid black"}}>
                            <div>
                                <h3>{singledata.name}</h3>
                            </div>
                            <div>
                               <img src={singledata.img+".jpg"}></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ShowAllPokemonGrid