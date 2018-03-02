module.exports = function(sequelize, DataTypes) {
	var Comments = sequelize.define("Comments",{
		Message: {
			type: DataTypes.STRING,
		}
	});
	return Comments;
};

