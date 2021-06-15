//Archivo para sacar la data 
const fs = require('fs');
const path = require('path');


const DownPath = path.join(path.dirname(process.mainModule.filename),  'data', 'testData', 'links.json' );

const writePastLinks = (element)=>{
    fs.readFile(DownPath, (err, data)=>{
        if(err)
            return console.error(err);
        let content = data.toString();
        content = JSON.parse(content);
        content.data.push(element)
        content.total = content.data.length;
        console.log(content.data)
        let string = JSON.stringify(content)
        fs.writeFile(DownPath, string, (err)=>{
            if(err)
                console.error(err);
            console.log("modificado exitosamente")
        })
    })

}



module.exports =  class WritePastLinks  {
    constructor(obj){
        this.data = obj
    }
    static writeFile(element) {
        writePastLinks(element)
        console.log("hola")
    }
}
