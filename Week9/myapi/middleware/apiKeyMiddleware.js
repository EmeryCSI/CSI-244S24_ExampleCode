//Middleware is just code that runs on every requests
//When you create a middleware you will get a req, res and a next
//The req and res work similarly to when you are making an enpoint
//The next is used to call the next middleware in the chain
const apiKeyMiddleware = (req, res, next) => {
  //get the api passed to the request if any
  const apiKey = req.headers["x-api-key"];
  //check the apiKey
  if (!apiKey || apiKey !== process.env.API_KEY) {
    //here they failed
    return res.status(401).json({ message: "Unauthorized" });
  }
  //here they passed, call the next middleware in the chain
  next();
};
//export this function so we can use it later
module.exports = apiKeyMiddleware;
