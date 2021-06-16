//Archivo para sacar la data 
const fs = require('fs');
const path = require('path');




const writePastLinks = (element, file)=>{
    const DownPath = path.join(path.dirname(process.mainModule.filename),  'data', 'testData', file );
    fs.readFile(DownPath, (err, data)=>{
        if(err)
            return console.error(err);
        let content = JSON.parse(data)//pasado de binario a json
        let arrayContent = Object.values(content)
        if(arrayContent[arrayContent.length - 1] !== element){
            arrayContent.push(element)
            let exitJson = JSON.stringify({...arrayContent})
            fs.writeFile(DownPath, exitJson, (err)=>{
             if(err)
                console.log(err)
            console.log("modificado con exito")
        })
        }
        


        })

}



module.exports = class WritePastLinks  {
    constructor(obj){
        this.data = obj
    }
    static writeFile(element, file) {
        console.log("working")
        writePastLinks(element, file)
        
    }
}