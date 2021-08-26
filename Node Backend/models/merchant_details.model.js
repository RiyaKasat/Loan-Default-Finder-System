const { loan_application } = require(".");

module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('merchant_details', {
   
    bankName: {
    type:DataTypes.STRING,
    allowNull:false
          },

 
    
    isfcCode: {
    type:DataTypes.STRING,
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

                                                  loanApplicationId: {
                                                      type: DataTypes.INTEGER,
                                                      references: {
                                                        model: loan_application,
                                                        key: 'id',
                                                        as: 'loanApplicationId',
                                                      },
                                                      allowNull: false
                                                
                                                   },
                                                        
                                                //    userId: {
                                                //       type: DataTypes.INTEGER,
                                                //       references: {
                                                //         model: user,
                                                //         key: 'id',
                                                //         as: 'userId',
                                                //       },
                                                //       allowNull: false
                                                //     },
    identityProof:{
          type: DataTypes.BLOB,
          allowNull:false
    },

    AddressProof:
    {
      type: DataTypes.BLOB ,
      allowNull:false   
    },

    financialDocuments:
    {
      type: DataTypes.BLOB ,
      allowNull:false     
    },

    BusinessOwnershipProof:
    {
      type: DataTypes.BLOB ,
      allowNull:false       
    }
                                                  
                                                          
    
        },

        

        {
    tableName:'merchant_details'
        });
      };