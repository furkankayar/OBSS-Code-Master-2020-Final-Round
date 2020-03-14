"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const routes = require("./routes/index")(app);
exports.default = app;
//# sourceMappingURL=app.js.map