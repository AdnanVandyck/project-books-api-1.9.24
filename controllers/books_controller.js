const express = require('express')
const books = express.Router()

//INDEX
books.get('/', (req, res) => {
    res.send('Books Index Page')
})

module.exports = books