const { getTotalTime } = require("../helpers/getTotalTime");
const Recipe = require("../model/recipes");
const Category = require("../model/categories");

const getRecipes = async (req, res) => {
  const { page } = req.query;
  // console.log("Page: ", page);
  try {
    const limit = 8;
    const startIndex = (+page - 1) * limit;
    const total = await Recipe.countDocuments({});

    const recipes = await Recipe.find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json({
      data: recipes,
      currentPage: +page,
      pageTotal: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log(error);
  }
};

const getRecipesBySearch = async (req, res) => {
  const { searchQuery, page } = req.query;
  const title = new RegExp(searchQuery, "i");

  try {
    const limit = 8;
    const startIndex = (+page - 1) * limit;
    const total = await Recipe.countDocuments({ title });

    const recipes = await Recipe.find({ title })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);
    // console.log("Recipes: ", recipes);
    res.json({
      data: recipes,
      currentPage: +page,
      pageTotal: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log(error);
  }
};

const getDropdownCategories = async (req, res) => {
  try {
    let categories = await Category.find({});
    if (categories.length === 0) {
      const categoriesToCreate = [
        { name: "chicken" },
        { name: "beef" },
        { name: "fish" },
        { name: "dessert" },
        { name: "drink" },
        { name: "soup" },
        { name: "vegan" },
        { name: "pork" },
      ];
      categories = await Category.create(categoriesToCreate);
    }
    // console.log(categories);
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;

  console.log("params: ", req.params);
  try {
    const post = await Recipe.findById(id);
    // console.log("POST: ", post)
    res.status(200).json({ result: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const getRecipesByCategory = async (req, res) => {
  const { id } = req.params;
  const { page } = req.query;

  try {
    const limit = 8;
    const startIndex = (+page - 1) * limit;
    const total = await Recipe.countDocuments({ category: id });

    const recipes = await Recipe.find({ category: id })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json({
      data: recipes,
      currentPage: +page,
      pageTotal: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log(error);
  }
};

const createRecipe = async (req, res) => {
  const {
    title,
    description,
    preparationTime,
    cookTime,
    category,
    ingredients,
    steps,
    selectedFile,
    author,
  } = req.body;

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

const deleteRecipe = (req, res) => {};

module.exports = {
  getRecipes,
  getRecipesBySearch,
  getDropdownCategories,
  getRecipesByCategory,
  createRecipe,
  getRecipe,
  deleteRecipe,
};
