//Archivo para sacar la data 
const fs = require('fs');
const path = require('path');


const DownPath = path.join(path.dirname(process.mainModule.filename),  'data', 'testData', 'download.json' );

const getDownMovies = cb =>{
    fs.readFile(DownPath, (err, content)=>{
        if (err){
            cb([ 'aa'])
            console.log(err)
        }else{
            cb( JSON.parse(content))
        }  
    })  
}


//clase para sacar los datos para la aplicacion
module.exports =  class Download  {
    constructor(obj){
        this.data = obj
    }
    static fetchDown(cb) {
        getDownMovies(cb)//funcion que regrea la informacion para pner el el panel de control
    }
}

