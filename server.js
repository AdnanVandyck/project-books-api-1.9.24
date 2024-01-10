// DEPENDENCIES
const express = require('express')

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// HOMEPAGE
app.get('/', (req, res) => {
    res.send('Hey, welcome to the party!')
})

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(PORT, () => {
    console.log('this server is lit on', PORT)
})