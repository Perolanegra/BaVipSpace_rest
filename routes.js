const express = require("express");
const routes = express.Router();
const multer = require("multer");

// const CategoriesCtrl = require("./controllers/CategoriesCtrl");
const SchedulingCtrl = require("./src/controllers/schedulingController");
// const UsersCtrl = require("./controllers/UsersCtrl");

const CacheMiddleware = require("./src/middlewares/cacheMiddleware");
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
routes.get("/posts", cm.cacheVerify, schedulingCtrl.getAll);
// routes.post("/posts", upload.single("image"), pCtrl.store);
/** Fim posts */

/** Endpoints Usuário */
// routes.post("/user", UsersCtrl.store);
/** Fim Usuário */

module.exports = routes;
