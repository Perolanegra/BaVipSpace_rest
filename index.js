//index.js
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.listen(process.env.PORT, (_) =>
  console.log(`listening to ${process.env.PORT}`)
);

(async () => {
  const database = require("./db");

  try {
    const res = await database.sync();
    app.use("/vipi", require("./routes"));
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();
