const { DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('users', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: {
                args: 18,
                msg: 'Debes tener mínimo 18 años!',
            },
            max: {
                args: 100,
                msg: 'La edad máxima autorizada son 100 años!',
            },
        },
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [8, 50],
        },
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    timestamps: true,
});
