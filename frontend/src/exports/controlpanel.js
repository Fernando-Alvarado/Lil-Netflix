import axios from 'axios'

const peticion = (ruta, dataReq)=>{
    axios.post(ruta, {"data": dataReq})
    .then(res => {
             console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })
}

const delateElements = (i, array, setArray, cb )=>{//elmininar elemtos del arreglo de los links pasados
    let delated = []
    array.forEach(element => {//optimizar
        
        if (element !== array[i])
            delated.push(element)
    });
    setArray(delated)
    //hacer un fetch para guardarlo en la base de datos-------------------------------------------
    
}




export{
    peticion,
    delateElements,
}