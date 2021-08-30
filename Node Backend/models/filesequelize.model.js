const { loan_application } = require("../models/loan_application.model");

module.exports = (sequelize, Sequelize) => {
	const File = sequelize.define('file', {
	  type: {
			type: Sequelize.STRING
	  },
	  name: {
			type: Sequelize.STRING
	  },
	  data: {
			type: Sequelize.BLOB('long')
	  },

   
      loanApplicationId: {
        type: Sequelize.INTEGER,
        references: {
          model: loan_application,
          key: 'id',
          as: 'loanApplicationId',
        },
        allowNull: false
  
     },

	});
	
	return File;
}