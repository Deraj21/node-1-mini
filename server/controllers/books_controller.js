let books = [];
let id = 0;

module.exports = {
  
  // GET
  read: (req, res) => {
    res.status(200).send(books);
  },
  
  // POST
  create: ( req, res ) => {
    const { title, author } = req.body;
    let book = {
      id: id,
      title: title,
      author: author
    }
    books.push(book);
    id++;
    res.status(200).send( books );
  },
  
  // PUT
  update: (req, res) => {
    books.forEach(book => {
      if (book.id === parseInt(req.params.id)){
        if (req.body.title) book.title = req.body.title;
        if (req.body.author) book.author = req.body.author;
        res.status(200).send(books);
      }
    })
  },

  // DELETE
  delete: (req, res) => {
    let index = -1;
    books.forEach( (book, i) => {
      if (book.id === req.params.id){
        index = i;
      }
    } );
    books.splice(index, 1);
    res.status(200).send(books);
  }
};