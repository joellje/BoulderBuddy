const app = require("./app.js");
const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.ATLAS_URI.replace(
  "<PASSWORD>",
  process.env.ATLAS_PASSWORD
);

mongoose.set("strictQuery", true);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
