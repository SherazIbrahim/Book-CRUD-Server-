const express = require('express');
const bookMiddleware = require("../Middlewares/bookMiddleware.js");

const {sendAllBooks,insertNewBook,editBook,deleteBook} = bookMiddleware;
const router = express.Router();

router.get('/',sendAllBooks);
router.post('/',insertNewBook);
router.put('/',editBook);
router.delete('/:id',deleteBook);

module.exports = router;