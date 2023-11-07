const { DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('users', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
        },
    },
    gender: {
        ///M, F,O
        type: DataTypes.CHAR(1),
        allowNull: false,
        validate: {
            esGeneroValido(value) {
                // Validación personalizada para verificar si el género es válido
                const generoValido = ['M', 'F', 'O'];
                if (!generoValido.includes(value.toUpperCase())) {
                    throw new Error('Gender must be "M", "F" o "O"');
                }
            },
        },
    },
    timestamps: true,
});
