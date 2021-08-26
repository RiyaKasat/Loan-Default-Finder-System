const express = require("express");
const router = express.Router();
const controller = require("../controller/merchant_details.controller");
const upload = require("../Middleware/upload");

let routes = (app) =>

{
    router.post("/upload", upload, controller.createMerchantDetails);
    router.get("/files", controller.getListFiles);
    router.get("/files/:name", controller.download);
  
    app.use(router);
  };

  
module.exports = routes;



