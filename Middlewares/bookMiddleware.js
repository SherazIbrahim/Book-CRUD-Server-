const mongoose = require('mongoose');
const book = require("../Entities/book.js");
const bookSchema = require("../Schemas/bookSchema.js");
require('dotenv').config();


const connection = mongoose.connect(process.env.DB_URL + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology:true

})

const bookModel = mongoose.model("books",bookSchema);
const sendAllBooks = async (req,res) => {
   try{
    let books = []
    const data = await bookModel.find()
            
            data.forEach(item => {
            b1 = new book(item._id,item.title,item.author,item.no_of_pages,item.published_at);
       
            books.push(b1);
            })
        
    res.statusCode = 200;
    
    let jsondata = JSON.stringify(books)
    res.send(jsondata);
    res.end();
   }catch(err){
    console.log("Error occurred : " + err.message);
    res.statusCode = 500
    res.send(JSON.stringify({message:"Could not load data! Server Side Error!"}))
    res.end();
   }
}

const insertNewBook = async (req,res) => {
   try{
    if(await bookModel.findOne({title : req.body.title}).count() > 0){
        res.statusCode = 200
        res.send(JSON.stringify({message:`Book with title : ${req.body.title} already exists!`}))
        res.end();
    }
    else{
    bookObject = new book("",req.body.title,req.body.author,req.body.no_of_pages,req.body.published_at);
    bookModel.insertMany(
        [
            {
                title: bookObject.title,
                author: bookObject.author,
                no_of_pages: bookObject.no_of_pages,
                published_at: Date.parse(bookObject.published_at)
            }
        ]
    ).then(()=>{
    res.statusCode = 201;
    res.send(JSON.stringify({message:"New Book Inserted!"}));
    res.end();
    })
    .catch((err)=>{
        res.statusCode = 500
        res.send(JSON.stringify({message:"Could not insert data! Server Side Error!"}))
        res.end();
    })
    }
   }
   catch(err){
    console.log("Error occurred : " + err.message);
    res.statusCode = 500
    res.send(JSON.stringify({message:"Server Side Error!"}))
    res.end(); 
   }
}

const editBook = (req, res) => {
    try{
        bookObject = new book(req.body.id,req.body.title,req.body.author,req.body.no_of_pages,req.body.published_at);
        bookModel.updateOne({_id: bookObject.id},{$set: 
            {
                title: bookObject.title,
                author: bookObject.author,
                no_of_pages: bookObject.no_of_pages,
                published_at: Date.parse(bookObject.published_at)
            }}
        ).then(()=>{
            res.statusCode = 200;
            res.send(JSON.stringify({message:"Updated the information!"}));
            res.end();
        })
        .catch((err)=>{
            console.log(err)
            res.statusCode = 500
            res.send(JSON.stringify({message:"Could not update data! Server Side Error!"}))
            res.end();
        })
       }
       catch(err){
        console.log("Error occurred : " + err.message);
        res.statusCode = 500
        res.send(JSON.stringify({message:"Server Side Error!"}))
        res.end(); 
       }
}

const deleteBook = (req,res) => {
    try{
        bookModel.deleteOne({
            _id: req.params.id
        }).then(()=>{
            res.statusCode = 200;
            res.send(JSON.stringify({message:"Deleted the information!"}));
            res.end();
        })
        .catch((err)=>{
            console.log("Error occurred : " + err.message);
            res.statusCode = 500
            res.send(JSON.stringify({message:"Could not delete data! Server Side Error!"}))
            res.end();
        })
       }
       catch(err){
        console.log("Error occurred : " + err.message);
        res.statusCode = 500
        res.send(JSON.stringify({message:"Server Side Error!"}))
        res.end(); 
       }
}

module.exports = {
    sendAllBooks,
    insertNewBook,
    editBook,
    deleteBook
}