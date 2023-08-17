const express = require("express");
const router = express.Router();
const { getRecipes, createRecipe, deleteRecipe, getRecipe } = require("../controllers/recipes");
const verifyJwt = require("../middleware/jwtVerify");

router.get("/", verifyJwt, getRecipes);
router.post("/", verifyJwt, createRecipe);
router.post("/", verifyJwt, deleteRecipe);
router.get("/:id", getRecipe);

module.exports = router;
