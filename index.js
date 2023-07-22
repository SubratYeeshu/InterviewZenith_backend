const express = require("express");
const mongoose = require("mongoose");
require("./Db/config");
const cors = require("cors");
const multer = require("multer");
const app = express();



const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const userRouter = require("./routes/user");
const optRouter = require("./routes/forgot");
const recipeRouter = require("./routes/recipe");
const ratingRouter = require("./routes/rating");
const imageRouter = require("./routes/image");
const contactRouter = require("./routes/contact");
const profileRouter = require("./routes/profile");

app.use("/user", userRouter);
app.use("/forgot", optRouter);
app.use("/recipe", recipeRouter);
app.use("/rating", ratingRouter);
app.use("/image", imageRouter);
app.use("/contact", contactRouter);
app.use("/profile", profileRouter);


app.get("/", (req, res) => {
  res.send("Hello Developer!");
});

const port = process.env.PORT || 3002;

app.listen(3002, () => {
  console.log(`Port is listeing at ${port}`);
});
