const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
//import our routes
const postRoutes = require("./routes/PostRoutes");
const userRoutes = require("./routes/UserRoutes");
//configure dotenv
configDotenv();
const app = express();
const port = process.env.PORT || 5001;
MONGO_URI = process.env.MONGO_URI;

// Middleware to parse JSON bodies
app.use(express.json());

//define routes
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the blog API");
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () => console.log(`Listening on port ${port}...`));
