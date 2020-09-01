const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=yourAPIKey";

// Matches with "/api/books/search"
router.route("/search")
  .get(URL + query.title + APIKEY);

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
