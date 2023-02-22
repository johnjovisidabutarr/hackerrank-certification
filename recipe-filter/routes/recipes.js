var recipes = require("../recipes.json");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send(recipes).status(200);
});

router.get("/shopping-list", (req, res) => {
  const id = req.query.ids;
  if (!id) return res.sendStatus(400);

  let id_object = id.split(",");
  let arr = [];
  let data = [];

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < id_object.length; j++) {
      if (recipes[i].id == id_object[j]) {
        arr.push(id_object[j]);
      }
    }
  }

  if (arr.length == 0) return res.status(404).send("NOT_FOUND");

  for (let i = 0; i < arr.length; i++) {
    data.push(...recipes[arr[i] - 1].ingredients);
  }

  res.json(data).status(200);
});

module.exports = router;
