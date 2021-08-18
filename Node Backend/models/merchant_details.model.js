module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('merchant_details', {
 
//     merchantDetailsId: {
//     type:DataTypes.INTEGER(11),
//     allowNull:false,
//     primaryKey:true,
//     autoIncrement:true
//           },
    bankName: {
    type:DataTypes.STRING,
    allowNull:false
          },
    accountNumber: {
    type:DataTypes.STRING,
    allowNull:false,
    
          },
    isfcCode: {
    type:DataTypes.STRING,
    allowNull:false,
          },

          bankAddress:{
            type:DataTypes.STRING(30),
            allowNull:false,   
         },
//     merchantId: {
//     type:DataTypes.INTEGER(10),
//     allowNull:false,
//           },
          aadharNumber: {
            type:DataTypes.INTEGER(15),
            allowNull:false,
                  },
                  panNumber: {
                    type:DataTypes.INTEGER(15),
                    allowNull:false,
                          },
                          security_file: {
                            type:DataTypes.BLOB,
                            allowNull:false,
                                  },
                                  security: {
                                    type:DataTypes.STRING(50),
                                    allowNull:false,
                                          },
                                          riskScore: {
                                            type:DataTypes.INTEGER(10),
                                            allowNull:false,
                                            default:5
                                                  },
                                                  businessType: {
                                                    type:DataTypes.STRING(100),
                                                    allowNull:false,
                                                          }
                                                          
    
        },

        

        {
    tableName:'merchant_details'
        });
      };