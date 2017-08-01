const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 3000

// Map the root to the build folder and serve static files
app.use('/', express.static('build'), (req, res) => {console.log('GET/', req.connection.remoteAddress, "<=", req.originalUrl)})

app.listen(PORT, () => {
    console.log("Server runnning at: http://localhost:" + PORT)
});
