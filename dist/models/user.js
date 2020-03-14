"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    profile_image: {
        type: new sequelize_1.DataTypes.STRING(128),
        defaultValue: 'http://localhost:8000/uploads/default.png'
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: database_1.Database,
    tableName: '_user',
    timestamps: false
});
module.exports = User;
//# sourceMappingURL=user.js.map