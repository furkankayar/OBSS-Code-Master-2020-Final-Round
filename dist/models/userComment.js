"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
class UserComment extends sequelize_1.Model {
}
UserComment.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    comment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
}, {
    sequelize: database_1.Database,
    tableName: '_user_comment',
    timestamps: false
});
UserComment.belongsTo(index_1.User, { as: 'userId', foreignKey: 'user_id' });
UserComment.belongsTo(index_1.Comment, { as: 'commentId', foreignKey: 'comment_id' });
module.exports = UserComment;
//# sourceMappingURL=userComment.js.map