module.exports = function(sequelize, DataTypes) {
	var Medalist = sequelize.define("Medalist",{
		Country: {
			type: DataTypes.STRING,
			allowNull: false
			// validate: We may want to validate that its a participating country
		},
		Gold: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate:{
				isInt: true
			}
		},
		Silver: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate:{
				isInt: true
			}
		},
		Bronze: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate:{
				isInt: true
			}
		},{
		Event: {
			type: DataTypes.STRING,
			allowNull: true,
			// validate: We may want to validate to make sure its a Winter olympic event
		}
	});
	return Medalist;
};

//Country, Gold, Silver, Bronze, Event,