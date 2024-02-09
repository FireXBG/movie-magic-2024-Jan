const router = require("express").Router();

const movieService = require("../services/movieService");
const castService = require("../services/castService");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
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
  console.log(movie);
  // const casts = await castService.getByIds(movie.casts).lean();

  // TODO: Fix the rating
  movie.rating = new Array(Number(movie.rating)).fill(true);

  res.render("details", { movie });
});

router.get("/movies/:id/attach", isAuth, async (req, res) => {
  const movie = await movieService.getOne(req.params.id).lean();
  const casts = await castService.getAll().lean();

  // TODO: Remove already added casts from the list
  res.render("movie/attach", { ...movie, casts });
});

router.post("/movies/:id/attach", async (req, res) => {
  const castId = req.body.cast;

  await movieService.attach(req.params.id, castId);

  res.redirect(`/movies/${req.params.id}/attach`);
});

router.get("/movies/:movieId/edit", isAuth, async (req, res) => {
  console.log(req.user);
  if (!req.user) {
    return res.redirect("/auth/login");
  }
  const movie = await movieService.getOne(req.params.movieId).lean();

  res.render("movie/edit", { movie });
});

module.exports = router;
