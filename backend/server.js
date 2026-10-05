const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the API!",
  });
});

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Notebook",
      price: 4500,
    },
    {
      id: 2,
      name: "Mouse",
      price: 150,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 300,
    },
  ]);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("API running on port 3000");
});