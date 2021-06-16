//archivo principal para el paenl de control
const express = require("express")
const PanelControl= require("../controllers/Panelontrol/panelControlController")
const router = express.Router()



router.get("/DataControlPanel/", PanelControl.downloadedMovies)
router.get("/DataControlPanelLinks/", PanelControl.pastLinkDowloadedMovies)
router.get("/DataControlPanelError/", PanelControl.DownloadedErrors)
router.post("/DataWritePasteLinks/", PanelControl.WritePastLinks)
router.post("/DataWriteDownMovies/", PanelControl.WriteMovies)
router.post("/DataDelateMovies/", PanelControl.DelateDownMovies)
router.post("/DataDelatePastLinks/", PanelControl.DelatePastLinks)
module.exports = router