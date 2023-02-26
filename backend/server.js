const app = require("./app.js");
require("dotenv").config();

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
