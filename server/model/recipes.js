const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: String,
    description: String,
    preparationTime: {
      type: {
        count: Number,
        measure: String,
      },
    },
    cookTime: {
      type: {
        count: Number,
        measure: String,
      },
    },
    totalTime: {
      type: {
        hours: Number,
        minutes: Number,
      },
    },
    category: String,
    ingredients: {
      type: [
        {
          name: String,
          placeholder: String,
        },
      ],
    },
    steps: {
      type: [
        {
          name: String,
          placeholder: String,
        },
      ],
    },
    selectedFile: String,
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
