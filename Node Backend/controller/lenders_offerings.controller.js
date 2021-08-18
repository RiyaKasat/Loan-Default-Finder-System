const db = require("../models");
const config = require("../config/auth.config");
const Lender_Offerings = db.lender_offerings;
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user, role } = require("../models");


//done
exports.createOffer = (req, res) => {
    // Validate request
    
    if (!req.body.offer_details) {
      res.status(400).send({
        message: " Offer_details can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const offer = {
        offer_details: req.body.offer_details,
        tenure: req.body.tenure,
        interest_rate:req.body.interest_rate,
        loan_type: req.body.loan_type,
        lender_email : req.body.lender_email,    //lender's email.
        lender_name: req.body.lender_name,
        userId: req.body.userId  //Admin who has created this offer.
          
    };
  
   
    Lender_Offerings.create(offer)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };







  //find by lender's name/id using query parameters.
  exports.findAllOffers = (req, res) => {
    Lender_Offerings.findAll({
      include:[{
        model: user,
        where:{ userId: req.body.userId},
        // include:[
        //   {
        //     model : role,
        //     where: {id: 2}
        //   }
        // ]
        
        }
       ]
      }
    )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };




  

  //Get offer details and then lenders email using offer Id.
  exports.displayAllOffers = (req, res) => {
    Lender_Offerings.findAll(
      {
        id: req.query.offererId
      }
    )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };



  //Find lender's email by lender offer Id
  exports.displayAllOffers = (req, res) => {
    Lender_Offerings.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };






