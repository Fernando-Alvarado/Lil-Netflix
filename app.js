const express = require("express")
const panelControl = require("./routes/controlPanelRoutes")

const app = express()


app.use(panelControl)

app.listen(3001)