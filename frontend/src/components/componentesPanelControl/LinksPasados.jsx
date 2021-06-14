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
    },[])
    const delateElements = (i)=>{//elmininar elemtos del arreglo
        let delated = []
        data.forEach(element => {//optimizar
            if (element !== data[i])
                delated.push(element)
        });
        setData(delated)
        //hacer un fetch para guardarlo en la base de datos
        

    }
    return (
        <div>
            <h1>Peliculas previamente descargadas</h1>
            <ul>
                {
                    data.map((text, i) =>(
                    <li key={i}> {text}  <button onClick={()=>{delateElements(i)}}>Eliminar </button> </li>  
                    ))
                }
            </ul>
            {/* <form>
                <span>Agregar peliculas</span>
                <input type="text" placeholder="Agregar peliculas" value="NuevaPelicula" > </input>
                <button type="submit"> Agregar</button>
            </form> */}
        </div>
    )
}

export default LinksPasados
/*
<form onSubmit={modoEdicion ? editarTare : agregarTarea}>
                      {
                        error ? <span className= "text-danger">{error}</span> : null
                      }
                    <input
                      type="text" 
                      className="form-control mb-2"
                      placeholder="ingrese tarea" 
                      onChange={e => setTarea(e.target.value)}-------------------------------------------------------
                      value={tarea}></input> 
                    <div className="d-grid gap-2"> 
                       {
                         modoEdicion ? (
                          <button className="btn btn-primary " type="submit"> Editar</button> 
                         ):(
                          <button className="btn btn-dark " type="submit"> Agregar</button> 
                         )
                       }
                    </div>
                   
                  </form>
*/