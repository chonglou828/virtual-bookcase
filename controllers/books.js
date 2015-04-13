var Book = require('../models/book');

exports.get = function(req, res) {
  Book.find()
  .select("-_id")
  .lean()
  .limit(Number(req.param('limit')) || 20)
  .exec()
  .then(function(books) {
    books.forEach(function(book) {
      book.cover = '/asset/cover/' + book.cover;
    })
    res.json(books);
  });
}