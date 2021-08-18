
const { user } = require("../models/user.model");

module.exports = (sequelize, DataTypes) => {
    const lender_offerings = sequelize.define("lender_offerings", {
    
      // offer_id:{
      //     type: DataTypes.INTEGER(11),
      //     allowNull: false,
      //     primaryKey: true,
      //     autoIncrement: true
      // }, 
    //   lender_id:{
    //     type: DataTypes.INTEGER(11),
    //     allowNull: false,
    //   },
      offer_details: {
        type: DataTypes.STRING
      },

      tenure:{
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      interest_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      loan_type:
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // userId: {
      //   type: DataTypes.INTEGER(11),
      //   allowNull: false
      // }

      // emailFK:{
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   references: {
      //         model: user,
      //         key: 'email',
      //         as: 'emailFK',
      //       }
      // },

      lender_email:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      lender_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: user,
          key: 'id',
          as: 'userId',
        }

      },

    }
    );
  
    return lender_offerings;
  };