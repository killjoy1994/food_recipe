const express = require("express");
const router = express.Router();
const { getRecipes, createRecipe, deleteRecipe, getRecipe } = require("../controllers/recipes");
const verifyJwt = require("../middleware/jwtVerify");

router.get("/", verifyJwt, getRecipes);
router.post("/", createRecipe);
router.post("/", deleteRecipe);
router.post("/:id", getRecipe);

module.exports = router;
