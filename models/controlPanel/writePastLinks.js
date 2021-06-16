//Archivo para sacar la data 
const fs = require('fs');
const path = require('path');


const DownPath = path.join(path.dirname(process.mainModule.filename),  'data', 'testData', 'links.json' );

const writePastLinks = (element)=>{
    console.log(DownPath)
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
    static writeFile(element) {
        console.log("working")
        writePastLinks(element)
        
    }
}