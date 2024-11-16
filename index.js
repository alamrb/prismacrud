const express = require("express");
// Using Node.js `require()`
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/product.model");

const productRoute = require("./routes/product.route");

// routes

app.use("/api/products", productRoute);

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // data find from field
// app.listen(3000, () => {
//   console.log("Server is running on port 3000....");
// });

//Route Stat here

app.get("/", (req, res) => {
  res.send("Welcome to the");
});

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(5000).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // add product==================

// app.post("/api/products", async (req, res) => {
//   //   console.log(req.body);
//   //   res.send(req.body);
//   //   res.send("Data Received");

//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).send("Server Error");
//   }
// });

// // update product=================

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);

//     // res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete product=================

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "product Deleted SuccessFully" });

//     // res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://root:oKrVnfH6kYBwUyLp@backenddb.jjejs.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB",
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
