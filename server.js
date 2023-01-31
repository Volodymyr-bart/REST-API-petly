const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connect");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
