const db = require("../models");
const config = require("../config/auth.config");
const Loan_Applications = db.loan_application;
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user, role, loan_application, merchant_details } = require("../models");



exports.createMerchantDetails = (req, res) => {
  
      if (!req.body.loanRepaymentAccountNo && !req.body.security && !req.body. security_files) {
        res.status(400).send({
          message: " Complete the required fields!"
        });
        return;
      }
  
      const merchant_detailsform= {

            loanRepaymentAccountNo: req.body.loanRepaymentAccountNo,
            security: req.body.security,
        // riskScore: req.body.riskScore,  --we will append
            businessType:  req.body.businessType,
            security_files: req.body.security_files                                                          
          
     };
    
      
      merchant_details.create( merchant_detailsform)
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Merchant Details Form."
          });
        });
    };
  
  
  
  
  //find user all loan Applications --done
  exports.findAllLoanApplications = (req, res) => {
    console.log(req.body);
      loan_application.findAll({
         userId: req.query.id
        })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Loan Applications."
          });
        });
    };
  
  