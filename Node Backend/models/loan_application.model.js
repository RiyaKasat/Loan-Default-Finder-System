const { lender_offerings } = require("../models/lender_offerings.model");
const { user } = require("../models/user.model");

module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('loan_application', {
    fullname:{
          type: DataTypes.STRING,
          allowNull:false
    },

    email:{
      type: DataTypes.STRING,
      allowNull:false  
    },

    birthday:{
      type: DataTypes.DATE,
      allowNull:false  
    },

    gender:{
      type: DataTypes.STRING,
      allowNull:false  
    },


    loanStatus: {
    type:DataTypes.STRING(30),
    allowNull:false,
    defaultValue:'Requested'
    },

    loanAmount: {
    type:DataTypes.INTEGER(30),
    allowNull:false,
          },


          contact:
          {
            type:DataTypes.INTEGER(10),
            allowNull:false, 
          },

   company_pancard:
   {
    type:DataTypes.STRING(30),
    allowNull:false,    
   },

   company_name:
   {
    type:DataTypes.STRING(30),
    allowNull:false,    
   },
   businessPremise:
   {
      type:DataTypes.STRING(30),
    allowNull:false,     
   },


   pincode:
   {
      type:DataTypes.INTEGER(10),
      allowNull:false, 
   },



   salesLastYear:
   {
      type:DataTypes.STRING(30),
      allowNull:false,      
   },

   yearsInCurrentSales:
   {
      type:DataTypes.STRING(30),
      allowNull:false,   
   },

   state:
   {
      type:DataTypes.STRING(30),
      allowNull:false,   
   },

   city:
   {
      type:DataTypes.STRING(30),
      allowNull:false,   
   },



   loanRepaymentAccountNo:
   {
      type:DataTypes.INTEGER(30),
      allowNull:false,   
   },

  
   lenderOfferingId: {
      type: DataTypes.INTEGER,
      references: {
        model: lender_offerings,
        key: 'id',
        as: 'lenderOfferingId',
      },
      allowNull: false

   },
        
   userId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: 'id',
        as: 'userId',
      },
      allowNull: false
    },

    lender_email : {
      type:DataTypes.STRING(30),
      allowNull:false,   
    }

                     
},
        {
    tableName:'loan_application'
        });
      };