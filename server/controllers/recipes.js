const Recipe = require("../model/recipes");

const getRecipes = async (req, res) => {
  const data = await Recipe.find({});
  res.json(data);
};
const createRecipe = async (req, res) => {
  const { title, description, preparationTime, cookTime, category, ingredients, steps, selectedFile } = req.body;

  try {
    const newRecipe = await Recipe.create({ title, description, preparationTime, cookTime, category, steps, ingredients, selectedFile });

    res.status(200).json({ result: newRecipe });
  } catch (error) {
    console.log(error);
  }
};
const getRecipe = (req, res) => {};
const deleteRecipe = (req, res) => {};

module.exports = { getRecipes, createRecipe, getRecipe, deleteRecipe };
