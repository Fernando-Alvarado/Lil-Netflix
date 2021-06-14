const express = require("express")
const panelControl = require("./routes/controlPanelRoutes")

const app = express()


app.use(panelControl )
///app.ise(pagima de inicio)

app.listen(3001)