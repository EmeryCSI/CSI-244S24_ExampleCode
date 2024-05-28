//bring in .env
require("dotenv").config();
//express and rate limit
const express = require("express");
const rateLimit = require("express-rate-limit");
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware");
//cors
const cors = require("cors");
//import the routes
const v1UserRoutes = require("./routes/V1/userRoutes");
const v2UserRoutes = require("./routes/V2/userRoutes");

//get the port from .env
const PORT = process.env.PORT;

//create the app
const app = express();

//lets create a rate-limiting object
const limit = rateLimit({
  windowMs: 10 * 60 * 1000, //time limit
  max: 100, //number of requests they can make in that limit
});

//configure middleware
app.use(express.json());
app.use(cors());
app.use(limit);
//add the apikey middleware globally
//app.use(apiKeyMiddleware);

//define an endpoit at the root
app.get("/", (req, res) => {
  res.send("Hello World");
});
//Versioning
//Here our version is going to come in as part of the uri
//requests to /v1 go to version one of the controller
//requests to /v2 go to version two of the controller
app.use("/v1", v1UserRoutes);
app.use("/v2", v2UserRoutes);

//lets make a protected endpoint using our middleware
app.get("/protected", apiKeyMiddleware, (req, res) => {
  res.send("This is a protected endpoint");
});

//listen on the port
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
