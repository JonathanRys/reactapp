const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 3000

// Map the root to the build folder
app.use('/img/', express.static('img'), (req, res)=>{console.log('GET/img', req.connection.remoteAddress, "<=", req.originalUrl)})
app.use('/css/', express.static('css'), (req, res)=>{console.log('GET/css', req.connection.remoteAddress, "<=", req.originalUrl)})
app.use('/', express.static('build'), (req, res)=>{console.log('GET/', req.connection.remoteAddress, "<=", req.originalUrl)})


app.listen(PORT, ()=>{
    console.log("Server runnning at: http://localhost:" + PORT)
});