// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// CONFIG
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error)
})

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// BOOKS
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

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