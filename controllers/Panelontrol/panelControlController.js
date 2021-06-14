//exporta todo lo que se tiene que renderizar
const Movies = require('../../models/controlPanel/downloadedMovies')
const Links = require('../../models/controlPanel/pastLinks')
const ErrorDownload = require('../../models/controlPanel/error')

exports.downloadedMovies =   (req, res)=>{
    Movies.fetchDown((props)=>{res.send(props)})
}
exports.pastLinkDowloadedMovies = (req, res)=>{
    Links.fetchLinks((props)=>{res.send(props)})
}
exports.DownloadedErrors = (req, res)=>{
    ErrorDownload.fetchLinks((props)=>{res.send(props)})
}