//exporta todo lo que se tiene que renderizar
const Movies = require('../../models/controlPanel')

exports.downloadedMovies =   (req, res)=>{
    Movies.fetchDown((props)=>{res.send(props)})
    
    
}

// exports.userController = {
//     "data": "ahhhh"
// }