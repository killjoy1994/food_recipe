const { getTotalTime } = require("../helpers/getTotalTime");
const Recipe = require("../model/recipes");

const getRecipes = async (req, res) => {
  const data = await Recipe.find({}).sort({ updatedAt: "desc" });
  res.json(data);
};
const createRecipe = async (req, res) => {
  const { title, description, preparationTime, cookTime, category, ingredients, steps, selectedFile, author } = req.body;

  try {
    const newRecipe = await Recipe.create({
      author,
      title,
      description,
      preparationTime,
      cookTime,
      totalTime: getTotalTime(preparationTime, cookTime),
      category,
      steps,
      ingredients,
      selectedFile,
    });

    res.status(200).json({ result: newRecipe });
  } catch (error) {
    console.log(error);
  }
};
const getRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Recipe.findById(id);
    // console.log("POST: ", post)
    res.status(200).json({ result: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
const deleteRecipe = (req, res) => {};

module.exports = { getRecipes, createRecipe, getRecipe, deleteRecipe };
