const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipe,
  getRecipesBySearch,
} = require("../controllers/recipes");
const verifyJwt = require("../middleware/jwtVerify");

router.get("/", getRecipes);
router.get("/search", getRecipesBySearch);
router.post("/", verifyJwt, createRecipe);
router.post("/", verifyJwt, deleteRecipe);
router.get("/:id", getRecipe);

module.exports = router;
