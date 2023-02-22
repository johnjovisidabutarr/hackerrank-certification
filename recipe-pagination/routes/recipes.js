var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedRecipes = recipes.slice(startIndex, endIndex);
  res.json(paginatedRecipes);
});

module.exports = router;
