const db = require("../models");
const config = require("../config/auth.config");
const Loan_Applications = db.loan_application;
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user, role, loan_application } = require("../models");



exports.createLoanApplication = (req, res) => {
  
  // const userId1= req.params.id;
    // Validate request
    if (!req.body.email && !req.body.loanAmount && !req.body. contact && !req.body.company_pancard) {
      res.status(400).send({
        message: " Complete the required fields!"
      });
      return;
    }

    // Create a Tutorial
    const loan= {
        fullname: req.body.fullname,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: req.body.gender,
        loanStatus:req.body.loanStatus,
        loanAmount: req.body.loanAmount,
        contact: req.body.contact,
        company_pancard: req.body.company_pancard,
        company_name: req.body.company_name,
        companyAddress: req.body.companyAddress,
        businessPremise: req.body.businessPremise,
        pincode: req.body.pincode,
        salesLastYear: req.body.salesLastYear,
        yearsInCurrentSales: req.body.yearsInCurrentSales,
        state: req.body.state,
        city: req.body.city,
        userId: req.body.userId,   //Applicant
        lenderOfferingId: req.body.lenderOfferingId,
        lender_email : req.body.lender_email,

   
establishedSincelast:req.body.establishedSincelast,
    businessType:req.body.businessType,
    createdDate:req.body.createdDate,
    lendername:req.body.lendername,


 loanRepaymentAccountNo: req.body.loanRepaymentAccountNo,
 
   };
  
    // Save Tutorial in the database
    loan_application.create(loan)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Loan Application."
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


  exports.findLoanApplicationById = (req, res) => {

    const id = req.params.id;
    // console.log(req.body);
      loan_application.findByPk(id)
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



  //done
  exports.findAllLoanApplicationsbyModerator = async (req, res) => {
      loan_application.findAll(
        {
          lender_email: req.query.lender_email
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




   exports.findAllLoanApplicationsbyAdminId = async (req, res) => {
    loan_application.findAll(
      {
        lender_email: req.query.lender_email
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







   



  


