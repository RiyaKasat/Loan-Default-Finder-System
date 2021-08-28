const db  = require("../models");
const userModel = require("../models/user.model");
const lender_offerings = db.lender_offerings;
const role = db.role;
const user = db.user;
const logger = require('../Middleware/logger')

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };


  
  exports.findAllAdmins = (req, res) => {
    // const title = req.query.;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    user.findAll()
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



  exports.findAllModerators= (req, res) => {
    user.findAll(
      {
        include:[{
        model: role,
        where:{id: 2}}
        
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




  exports.findAllUsers = (req, res) => {
    // const title = req.query.;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    user.findAll({
      include: lender_offerings}
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


  
  exports.findAllUser_Roles = (req, res) => {
    // const title = req.query.;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    user.findAll({
      include:[{
        model: role,
        where: {id: 1}
       }]
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


  exports.getRegisteredUserLoginData = (req, res)=>
  {
   
    const id = req.params.id;
    console.log("userid node:",id);
    logger.info("Userid get request",id);
    user.findByPk(id)
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

