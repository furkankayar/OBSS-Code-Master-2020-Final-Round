"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
class View extends sequelize_1.Model {
}
View.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: database_1.Database,
    tableName: '_view',
    timestamps: false
});
View.belongsTo(index_1.User, { as: "userId", foreignKey: "user_id" });
View.belongsTo(index_1.Post, { as: "postId", foreignKey: "post_id" });
module.exports = View;
//# sourceMappingURL=view.js.map