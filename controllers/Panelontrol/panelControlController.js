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
    console.log("hola desdes el controlador")
    WriteFiles.writeFile(req.body.data)




    
}