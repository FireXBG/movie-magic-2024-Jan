const router = require("express").Router();

const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const newMovie = req.body;
  movieService.create(newMovie);
});

router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movieService.getOne(movieId);

  movie.ratingStars = "&#x2605;".repeat(movie.rating);

  res.render("details", { movie });
});

module.exports = router;
