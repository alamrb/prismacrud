const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    description: {
      type: String,
      //   required: true,
    },
    price: {
      type: Number,
      //   required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      //   required: true,
      default: 0,
    },
    category: {
      type: String,
      //   required: true,
    },

    image: {
      type: String,
      default: "default.jpg",
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
