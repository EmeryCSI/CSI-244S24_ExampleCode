const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import Routes
const userRoutes = require("./routes/userRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Middleware to parse JSON requests
app.use(express.json());

// CORS Middleware
app.use(cors()); // Allow all origins

// If you want to allow specific origins, use:
// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// Route Middlewares
app.use("/api/user", userRoutes);
app.use("/api/protected", protectedRoutes);

app.listen(3000, () =>
  console.log("Server is up and running on http://localhost:3000")
);
