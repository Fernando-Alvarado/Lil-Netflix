//peticiones y respuestasa
const Movies = require('../../models/controlPanel/downloadedMovies')
const Links = require('../../models/controlPanel/pastLinks')
const ErrorDownload = require('../../models/controlPanel/error')
const WriteFiles = require('../../models/controlPanel/writePastLinks')
const DelateElement = require('../../models/controlPanel/delatateElement')

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
    WriteFiles.writeFile(req.body.data, 'links.json')
}
exports.DelatePastLinks = (req, res)=>{
    DelateElement.Delate(req.body.data, 'links.json')
}
exports.WriteMovies = (req, res)=>{
    WriteFiles.writeFile(req.body.data, 'download.json')
}
exports.DelateDownMovies= (req, res)=>{
    DelateElement.Delate(req.body.data, 'download.json')
}