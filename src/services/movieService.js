const Movie = require("../models/Movie");

const movies = [
  {
    _id: 1,
    title: "Jungle Cruise",
    genre: "Adventure",
    director: "Spillberg",
    date: "2019",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: "5",
    description: `The youngest of King Triton's daughters, Ariel is
    a beautiful and spirited young mermaid with a thirst for
    adventure. Longing to find out more about the world beyond the
    sea, Ariel visits the surface and falls for the dashing Prince
    Eric. Following her heart, she makes a deal with the evil sea
    witch, Ursula, to experience life on land.`,
  },
];

exports.search = (title, genre, year) => {
  let result = movies.slice;

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
  return movies.slice();
};

exports.create = (movieData) => {
  return Movie.create(movieData);
};

exports.getOne = (movieId) => {
  const movie = movies.find((movie) => movie._id == movieId);
  return movie;
};
