let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },
  create: (req, res) => {
    let {title, author } = req.body;
    let newBook = {
      id: id,
      title: title,
      author: body
    }
    id++
    books.push( newBook );
    res.status(200).send(books);
  },
  update: (req, res) => {
    books.forEach(book => {
      if (book.id === parseInt(req.params.id)){
        let { title, author } = req.body;
        books.tite = title;
        books.author = author;
        res.status(200).send(books);
      }
    })
  },
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