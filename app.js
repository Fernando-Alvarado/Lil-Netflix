const express = require("express")
const panelControl = require("./src/routes/controlPanelRoutes")

const app = express()


app.use(panelControl )

app.listen(3001)
