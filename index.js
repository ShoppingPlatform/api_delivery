const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const orderRoute = require("./routes/order");
const cors = require("cors");

dotenv.config();

mongoose
  .connect("mongodb+srv://Admin:Admin123+@mindfulness.tglek.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/v1/orders", orderRoute);

app.listen(process.env.PORT || 5002, () => {
  console.log("Backend server is running!");
});

// app.listen(5002, () => {
//   console.log("Backend delivery server is running!");
// });
