const Movie = require("../models/Movie");

exports.getAll = () => Movie.find();

exports.search = (title, genre, year) => {
  let query = {};

  if (title) {
    query.title = new RegExp(title, "i");
  }

  if (genre) {
    query.genre = genre.toLowerCase();
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query);
};

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => {
  const movie = Movie.findById(movieId).populate("casts");

  return movie;
};

exports.attach = async (movieId, castId) => {
  const movie = await this.getOne(movieId);

  // // TODO: Validate if castId exists

  movie.casts.push(castId);

  return movie.save();

  // Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};

exports.edit = (movieId, movieData) =>
  Movie.findByIdAndUpdate(movieId, movieData);

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);
