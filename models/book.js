const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  names:String,
  title:  String,
  authors:  String,
  description:String,
  infoLinks:String,
  imageLinks:String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
