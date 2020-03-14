"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const User = require("./user");
exports.User = User;
const Post = require("./post");
exports.Post = Post;
const Comment = require("./comment");
exports.Comment = Comment;
const UserComment = require("./userComment");
exports.UserComment = UserComment;
const View = require("./view");
exports.View = View;
const Vote = require("./vote");
exports.Vote = Vote;
if (process.env.NODE_ENV !== "TEST") {
    database_1.Database.sync();
}
//# sourceMappingURL=index.js.map