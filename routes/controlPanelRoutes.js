//archivo principal para el paenl de control
const express = require("express")
const DownloadedMovies = require("../controllers/Panelontrol/panelControlController")
const router = express.Router()



router.get("/DataControlPanel/", DownloadedMovies.downloadedMovies)
module.exports = router
