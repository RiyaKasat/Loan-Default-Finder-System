const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get("/api/test/getAllAdmins",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.findAllAdmins
  );

  app.get("/api/test/getAllUsers",
  controller.findAllUsers
  );

  app.get("/api/test/getAllUserRoles",
  controller.findAllUser_Roles
  );

 
  
  
  app.get("/api/test/getAllModerators",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.  findAllModerators
  );


  


};