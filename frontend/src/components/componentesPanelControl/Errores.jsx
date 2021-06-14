//archivos sin importar

import React, {useEffect, useState} from 'react'

const Errores = () => {
    const [data, setData] = useState([])
    //cargar la data con el fetch 
    useEffect(()=>{
        fetch('http://localhost:3001/DataControlPanelError/').then(res => {//luego debemis cambiar esta ruta
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes =>{
            setData(Object.values(jsonRes))
        })
    })   
    return (
        <div>
            <h1>Errores en las descargas</h1>
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

export default Errores