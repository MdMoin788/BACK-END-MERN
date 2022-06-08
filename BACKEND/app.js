require("dotenv").config();

const cors = require("cors");
const express = require("express");

const connect = require("./src/config/db");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const { register, login } = require("./src/controller/auth.cont");
const products = require("./src/controller/Products");
const mens = require("./src/controller/men.controller");
const womens = require("./src/controller/women.controller");
const kids = require("./src/controller/kid.controller");
const admin = require("./src/controller/admin.controller");

app.post("/register", register);
app.post("/login", login);
app.use("/products", products);
app.use("/mens", mens);
app.use("/womens", womens);
app.use("/kids", kids);
app.use("/admin", admin);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Database connected and running on 5000 ");
  } catch (err) {
    console.log(err.message);
  }
});
