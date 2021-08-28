const { authJwt } = require("../middleware");
const LendingOfferscontroller = require("../controller/lenders_offerings.controller");
const LoanAppcontroller = require("../controller/loanApplication.controller");
const usercontroller = require("../controller/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//   app.get("/api/test/all", controller.allAccess);

  //Lending Offers
  app.post("/api/createoffer1", LendingOfferscontroller.createOffer);
  app.get("/api/getAllOffersbyLenderId", LendingOfferscontroller.findAllOffers);
  app.get("/api/getAllOffers", LendingOfferscontroller.displayAllOffers);



   //Loan Application
   app.post("/api/createloanApp/", LoanAppcontroller.createLoanApplication);
   app.get("/api/getAllApplicationsByUser", LoanAppcontroller.findAllLoanApplications);
   app.get("/api/getAllLoanAppByMod", LoanAppcontroller.findAllLoanApplicationsbyModerator);
   app.get("/api/getLoanApplicationById/:id",LoanAppcontroller.findLoanApplicationById );


   app.get("/api/getLoginUserData/:id", usercontroller.getRegisteredUserLoginData);
   app.put('/api/loanAppOffer/update/:id', LoanAppcontroller.updateloanApplicationOfferByMod);

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