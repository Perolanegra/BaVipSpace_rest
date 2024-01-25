//index.js
(async () => {
  const bodyParser = require("body-parser");
  const express = require("express");
  const app = express();
  const assignEnvVarsToNode = require("./assignEnvVars");
  assignEnvVarsToNode();
  const cors = require("cors");
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
  const db = require("./models/index");

  try {
    const res = await db.authenticate();
    // const scheduling = require("./models/scheduling");
    // const res = await database.sync();
    // app.use("/vipi", require("../routes"));
    // app.listen(process.env.PORT, (_) =>
    //   console.log(`listening to ${process.env.PORT}`)
    // );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();
