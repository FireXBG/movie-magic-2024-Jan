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

exports.getAll = () => {
  return movies.slice();
};

exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
};
