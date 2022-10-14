const express = require("express")
const app = express()
const path = require("path")

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"))
}) // untuk mengeksekusi app

app.listen(4000, () => console.log("Server running...")) // localhost:4000
