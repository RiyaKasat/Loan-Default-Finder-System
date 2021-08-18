const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);




const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.lender_offerings = require("../models/lender_offerings.model.js")(sequelize, Sequelize);
db.loan_application = require("./loan_application.model.js")(sequelize, Sequelize);
db.merchant_details= require("./merchant_details.model.js")(sequelize, Sequelize);







db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});



db.user.hasMany(db.lender_offerings, {foreignKey: 'userId'});
db.lender_offerings.belongsTo(db.user, {foreignKey: 'userId'});


db.user.hasMany(db.loan_application, {foreignKey: 'userId'});
db.loan_application.belongsTo(db.user, {foreignKey: 'userId'});
db.lender_offerings.hasMany(db.loan_application, {foreignKey: 'lenderOfferingId'});
db.loan_application.belongsTo(db.lender_offerings, {foreignKey: 'lenderOfferingId'});


db.loan_application.hasOne(db.merchant_details);
db.merchant_details.belongsTo(db.loan_application);




// db.loan_application.belongsTo(db.user, {foreignKey: 'userId', allowNull: false})
// db.loan_application.belongsTo(db.lender_offerings, {foreignKey: '  offer_id'})


// db.merchant_details.belongsTo(db.loan_application, {foreignKey:'merchantDetailsId'})



// db.loan_application.belongsToMany(db.merchant_details, {
//   through: "merchant_table",
//   foreignKey: "loan_application_Id",
//   otherKey: "merchant_details_id"
// });

// db.user.belongsToMany(db.role, {
//   through: "merchant_table",
//   foreignKey: "merchant_details_id",
//   otherKey:"loan_application_Id"
// });






db.ROLES = ["user", "admin", "moderator"];

module.exports = db;