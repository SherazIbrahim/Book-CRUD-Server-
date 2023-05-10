const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({title : String, author : String, no_of_pages : Number, published_at : Date})

module.exports = bookSchema;