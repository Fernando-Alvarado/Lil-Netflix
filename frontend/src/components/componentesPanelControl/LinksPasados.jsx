import React, {useEffect, useState} from 'react'

const LinksPasados = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/DataControlPanelLinks/').then(res => {//luego debemis cambiar esta ruta
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes =>{
            setData(Object.values(jsonRes))
        })
    })
    return (
        <div>
            <h1>Peliculas previamente descargadas</h1>
            <ul>
                {
                    data.map((text) =>(
                    <li> {text} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LinksPasados