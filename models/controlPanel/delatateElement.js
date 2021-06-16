//Archivo para sacar la data 
const fs = require('fs');
const path = require('path');




const writePastLinks = (element, file)=>{
    const DownPath = path.join(path.dirname(process.mainModule.filename),  'data', 'testData', file );
    fs.readFile(DownPath, (err, data)=>{
        if(err)
            return console.error(err);
        let content = JSON.parse(data)//pasado de binario a json
        let arrayContent = Object.values(content)//pasar de json a arreglo
        if(arrayContent[arrayContent.length - 1] !== element){
            container = []
            arrayContent.forEach(i => {
                if(i !== element)
                    container.push(i)
            });
            let exitJson = JSON.stringify({...container})
            fs.writeFile(DownPath, exitJson, (err)=>{
                if(err)
                    console.log(err)
                console.log("Eliminado con exito")
            })
        }
        


    })

}



module.exports = class DelateElements  {
    constructor(obj){
        this.data = obj
    }
    static Delate(element, file) {
        console.log("working")
        writePastLinks(element, file)
        
    }
}