/* User model definition  */
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        usr_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usr_first_nm: DataTypes.STRING,
        usr_last_nm: DataTypes.STRING,
        usr_birth_date: DataTypes.DATE,
        usr_phone: DataTypes.STRING,
        usr_gender: DataTypes.STRING,
        usr_email1: {
            type: DataTypes.STRING,
            unique: {
                msg: 'The specified email address is already in use.'
            },
            validate: {
                isEmail: true,
                notEmpty: true
            } 
        },
        usr_email2: DataTypes.STRING,
        usr_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        usr_role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        usr_address_street1: DataTypes.STRING,
        usr_address_street2: DataTypes.STRING,
        usr_address_city: DataTypes.STRING,
        usr_address_postalcode: DataTypes.STRING,
        usr_address_country: DataTypes.STRING
    },
    {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return User;
}