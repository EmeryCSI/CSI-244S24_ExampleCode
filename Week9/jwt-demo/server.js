const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const userRoutes = require("./routes/userRoutes");

dotenv.config();

//console.log(process.env.CONNECTION_STRING);
// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Use user routes for API
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
