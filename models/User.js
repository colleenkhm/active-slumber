const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:  true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                len: [20]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique:true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'user'
    }
);

module.exports = 'user'