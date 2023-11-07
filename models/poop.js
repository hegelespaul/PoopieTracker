const { DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('users', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
        },
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    relatedFood: {
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            len:[3,50],
        }
    },
    timestamps: true,
});
