# Book-CRUD-Server-
Two Repositories :

1. Client Repository 
https://github.com/SherazIbrahim/Book-CRUD-Client-

2.Server(API) Repository
https://github.com/SherazIbrahim/Book-CRUD-Server-


Client Repository Main Files:

1.fetchBooks.js
It fetches all records from books (collection in Mongo DB) and it allows user to select a record for updation or deletion.


2.editBook.js
It allows user to update or delete the data selected from fecthBooks.js.

3.insertBook.js
It allows user to add a new record to the database.


Note: ALL these files establish connection to server or API(http://localhost:4000/) in order to perform all these tasks


Server Repository(API) Main Files:

1.book.js
It contains the definition of book object.

2.bookSchema.js
It contains the schema of book collection for MongoDB 

3.bookMiddlewares.js
It contains all the functions to perform CRUD OPERATIONS such as: ADD, RETERIEVE, UPDATE, AND DELETE

4.bookRoute.js
It contains the code to perform the routing for the API  for API-END-POINTS : addBook, getAllBooks, updateBook, deleteBook

5.index.js
It contains the code to start the server and make the API end point available for usage/connection
