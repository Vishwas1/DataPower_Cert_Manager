/* Service model definition  */
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('service', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        description1: DataTypes.STRING,
        description2: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        availability: DataTypes.BOOLEAN,
        availabilityByNumber: DataTypes.INTEGER 
    },
    {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return User;
}