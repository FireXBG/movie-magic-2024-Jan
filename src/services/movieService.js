const Movie = require("../models/Movie");

exports.search = async (title, genre, year) => {
  let result = await Movie.find().lean();

  if (title) {
    result.filter((movie) => movie.title.includes(title));
  }

  if (genre) {
    result.filter((movie) => movie.genre === genre);
  }

  if (year) {
    result.filter((movie) => movie.year === year);
  }

  return result;
};

exports.getAll = () => {
  const movies = Movie.find();
  return movies;
};

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => {
  const movie = Movie.findById(movieId);

  return movie;
};

exports.attach = async (movieId, castId) => {
  const movie = await this.getOne(movieId);

  // // TODO: Validate if castId exists

  movie.casts.push(castId);

  return movie.save();

  // Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};
