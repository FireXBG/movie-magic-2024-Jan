const router = require("express").Router();

const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const newMovie = req.body;
  console.log(newMovie);

  try {
    await movieService.create(newMovie);

    res.redirect("/");
  } catch (error) {
    res.redirect("/movies/create");
    res.status(400);
    console.log(error.message);
  }
});

router.get("/movies/:id", async (req, res) => {
  const movieId = req.params.id;
  const movie = await movieService.getOne(movieId).lean();

  movie.rating = new Array(Number(movie.rating)).fill(true);

  res.render("details", { movie });
});

router.get("/movies/:id/attach", async (req, res) => {
  res.render("movie/attach");
});

module.exports = router;
