const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  category: {type: String, required: true}
});
const Menu = mongoose.model("menu", menuSchema);
module.exports = { Menu };
