import React, {useEffect, useState} from 'react'
import {peticion} from '../../exports/controlpanel.js'



const LinksPasados = () => {
    const [data, setData] = useState([])
    const [newMovie, setNweMovie] = useState('')
    useEffect(()=>{
        fetch('http://localhost:3001/DataControlPanelLinks/').then(res => {//luego debemis cambiar esta ruta
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes =>{
            setData(Object.values(jsonRes))
        })
    },[])
    
    const addMovie = (e)=>{
        e.preventDefault()
        if(!newMovie.trim()){
            console.log("Elemento vacio")
            //mandar un fetch, para poner un error en la parte de errores-----------------------------
            return
          }
        setData([...data, [newMovie]])
        //haciendo peticion para editar cotas-------------------------------------------------------------
        peticion('http://localhost:3001/DataWritePasteLinks/', newMovie)//funcion exportada para guardar datos

    }    
    const delateElements = (i, text )=>{//elmininar elemtos del arreglo de los links pasados

        let delated = []
        data.forEach(element => {//optimizar
            
            if (element !== data[i])
                delated.push(element)
        });
        setData(delated)
        //hacer un fetch para guardarlo en la base de datos-------------------------------------------
        peticion('http://localhost:3001/DataDelatePastLinks/', text)
    }

    return (
        <div>
            <h1>Peliculas previamente descargadas</h1>
            <ul>
                {
                    data.map((text, i) =>(
                    <li key={i}> {text}  <button onClick={()=>{delateElements(i, text)}}>Eliminar </button> </li>  
                    ))
                }
            </ul>
            <form onSubmit={addMovie}>
                <span>Agregar peliculas</span>
                <input 
                    type="text"
                    name= "adding" 
                    placeholder="Agregar peliculas" 
                    onChange = { e => setNweMovie(e.target.value)}
                    value = {newMovie}/> 
                <button type="submit"> Agregar</button>
            </form>
        </div>
    )
}

export default LinksPasados