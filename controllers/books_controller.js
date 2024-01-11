const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

//INDEX
books.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'message'})
    })
})

//SHOW
books.get('/:id', (req, res) => { 
    Book.findOne()
    .then(foundBook => {
        res.json(foundBook)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'message'})
    })
})

module.exports = books