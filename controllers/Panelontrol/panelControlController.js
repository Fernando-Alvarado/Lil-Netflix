//peticiones y respuestasa
const Movies = require('../../models/controlPanel/downloadedMovies')
const Links = require('../../models/controlPanel/pastLinks')
const ErrorDownload = require('../../models/controlPanel/error')
const WriteFiles = require('../../models/controlPanel/writePastLinks')

exports.downloadedMovies =   (req, res)=>{
    Movies.fetchDown((props)=>{res.send(props)})
}
exports.pastLinkDowloadedMovies = (req, res)=>{
    Links.fetchLinks((props)=>{res.send(props)})
}
exports.DownloadedErrors = (req, res)=>{
    ErrorDownload.fetchLinks((props)=>{res.send(props)})
}
exports.WritePastLinks = (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000/config');
    res.setHeader('Access-Control-Allow-Methods','POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    console.log("hola desdes el controlador")
    console.log(req.body.data)
    WriteFiles.writeFile(req.body.data)




    
}