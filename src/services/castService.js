const Cast = require("../models/Cast");

exports.create = (casData) => {
  Cast.create(casData);
};

exports.getAll = () => {
  return Cast.find({}).lean();
};
