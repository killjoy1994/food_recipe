const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: String
});


const Category = mongoose.model("Category", categoriesSchema);
module.exports = Category;
