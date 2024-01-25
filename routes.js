const express = require("express");
const routes = express.Router();
const multer = require("multer");

// const CategoriesCtrl = require("./controllers/CategoriesCtrl");
const SchedulingCtrl = require("./controllers/schedulingController");
// const UsersCtrl = require("./controllers/UsersCtrl");

const CacheMiddleware = require("./middlewares/cacheMiddleware");
const cm = new CacheMiddleware({ cache: {} });
const schedulingCtrl = new SchedulingCtrl();

const storage = multer.diskStorage({
  destination: "files/", // Specify the destination folder
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});
const upload = multer({ storage: storage });
/** Endpoints **/

/** Endpoints posts */
routes.post("/schedule", upload.single("image"), schedulingCtrl.store);
routes.get("/posts", cm.cacheVerify, schedulingCtrl.getAll);
/** Fim posts */

/** Endpoints Usuário */
// routes.post("/user", UsersCtrl.store);
/** Fim Usuário */

module.exports = routes;
