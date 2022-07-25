const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected successfully."))
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running.");
});
