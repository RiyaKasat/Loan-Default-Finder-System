const express = require("express");
const router = express.Router();
const controller1 = require("../controller/merchant_details.controller");
const upload = require("../Middleware/upload");
const controller = require("../controller/multipleupload");
const upload1 = require("../config/multer.config.js")

// let routes = (app) =>

// {
//     // router.post("/upload/",controller1.upload);
//     // router.get("/files", controller1.getListFiles);
//     // router.get("/files/:name", controller1.download);
  
//     app.use(router);
//   };

  
// module.exports = routes;




module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//   app.get("/api/test/all", controller.allAccess);

  //Lending Off
  router.post('/api/file/multiple/upload/:id', upload1.array('files', 4), controller.uploadMultipleFiles);






  //  app.get("/api/getUserId",  LoanAppcontroller.findUserId);

//   app.get(
//     "/api/test/user",
//     [authJwt.verifyToken],
//     controller.userBoard
//   );

//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};
