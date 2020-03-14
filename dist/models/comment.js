"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Comment extends sequelize_1.Model {
}
Comment.init({
    comment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    body: {
        type: new sequelize_1.DataTypes.STRING(500),
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('now')
    }
}, {
    sequelize: database_1.Database,
    tableName: '_comment',
    timestamps: false
});
Comment.belongsTo(index_1.Post, { as: 'postId', foreignKey: 'post_id' });
module.exports = Comment;
//# sourceMappingURL=comment.js.map