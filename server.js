const app = require("./src/app.js");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`Running PORT: ${PORT}`)
  console.log(process.env.MONGO_CONNECTION_STRING)
});

module.exports = server;