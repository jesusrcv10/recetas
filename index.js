
const express = require('express');
const port = process.env.PORT || 3000

let app = express()

app.post("/webhook", (req, res) => {
    console.log("SE RECIBIO PETICION A WEBHOOK")
    console.log(`req ${req}`)
    console.log(`res ${res}`)
    res.json({respuesta: "WEBHOOK", fecha: new Date().toISOString(),req, res})
})

app.get("/", (req, res) => {
    res.send("INDEX")
})

app.listen(port, (err) => {
    if (err)
        console.log("SERVER NO INICIADO")
    else
        console.log(`Server running at port ` + port);
});