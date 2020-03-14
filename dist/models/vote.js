"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
class Vote extends sequelize_1.Model {
}
Vote.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: database_1.Database,
    tableName: '_vote',
    timestamps: false
});
Vote.belongsTo(index_1.User, { as: "userId", foreignKey: "user_id" });
Vote.belongsTo(index_1.Post, { as: "postId", foreignKey: "post_id" });
module.exports = Vote;
//# sourceMappingURL=vote.js.map