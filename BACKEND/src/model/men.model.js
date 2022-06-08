const mongoose = require("mongoose");

const menSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Mens = mongoose.model("men", menSchema);

module.exports = Mens;
