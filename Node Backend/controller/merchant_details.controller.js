const db = require("../models");
const config = require("../config/auth.config");
const Loan_Applications = db.loan_application;
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user, role, loan_application, merchant_details } = require("../models");

// const merchant_details = db.merchant_details;



const fs = require('fs');














const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resource/static/assets/uploads/";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
  
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url:  file,
        });
      });
  
      res.status(200).send(fileInfos);
    });
  };
  
  const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };
  



const createMerchantDetails = async(req, res) => {

  
      if (!req.body.loanRepaymentAccountNo && !req.body.security && !req.body. security_files) {
        res.status(400).send({
          message: " Complete the required fields!"
        });
        return;
      }
 const merchant_detailsform= {

              bankName: req.body.bankName,
              isfcCode: req.body.isfcCode,
              security:req.body.security,
              riskScore:req.body.riskScore,
              loanApplicationId: req.body.loanApplicationId,

              identityProof:fs.readFileSync(
            __basedir + "/resources/static/assets/uploads/" + req.file.filename),


                AddressProof:fs.readFileSync(
                  __basedir + "/resources/static/assets/uploads/" + req.file.filename
                ),

                financialDocuments:fs.readFileSync(
                  __basedir + "/resources/static/assets/uploads/" + req.file.filename
                ),

                BusinessOwnershipProof: fs.readFileSync(
                  __basedir + "/resources/static/assets/uploads/" + req.file.filename
                ),                                                                   
          
     };
    
      
      merchant_details.create( merchant_detailsform)
        .then(data => {
          
      
            // return res.send(`File has been uploaded.`);
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
  
  

    module.exports = {
      createMerchantDetails,
      getListFiles,
      download,
    };
  