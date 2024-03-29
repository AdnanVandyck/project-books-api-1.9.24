// Require Mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

// SCHEMA
const bookSchema = new Schema({
    title: { type: String },
    description: { type: String},
    year: { type: Number},
    quantity: { type: Number },
    imageURL: { type: String }
})

// model and export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book
