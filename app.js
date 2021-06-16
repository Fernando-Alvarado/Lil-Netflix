const express = require("express")
var cors = require('cors');
const panelControl = require("./routes/controlPanelRoutes")

const app = express()
app.use(express.json())
app.use(cors());
app.use(panelControl )
///app.ise(pagima de inicio)

app.listen(3001)