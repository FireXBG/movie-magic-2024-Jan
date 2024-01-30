const Cast = require("../models/Cast");
const Movie = require("../models/Movie");

exports.create = (casData) => {
  Cast.create(casData);
};
exports.getAll = () => {
  return Cast.find({}).lean();
};

exports.getByIds = (castIds) => {
  const casts = Cast.find({ _id: { $in: castIds } });

  return casts;
};
