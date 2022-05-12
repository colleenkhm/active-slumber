const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(passwordLogin){
        return bcrypt.compareSync(passwordLogin, this.password);
    }
}

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
        hooks: {
            beforeCreate: async(userData) =>{
                userData.password = await bcrypt.hash(userData.password, 8);
                return userData;
            }
        },
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'user'
    }
);

module.exports = User;