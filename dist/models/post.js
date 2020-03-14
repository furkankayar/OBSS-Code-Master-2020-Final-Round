"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
Post.init({
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    topic: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    content: {
        type: new sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('now')
    }
}, {
    sequelize: database_1.Database,
    tableName: '_post',
    timestamps: false
});
Post.belongsTo(index_1.User, { as: 'userId', foreignKey: 'user_id' });
module.exports = Post;
//# sourceMappingURL=post.js.map