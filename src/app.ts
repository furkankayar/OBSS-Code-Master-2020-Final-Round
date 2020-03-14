import { Express } from "express";
import express = require("express");
import bodyParser = require("body-parser");

const app: any = express();

app.set("port", process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const routes = require("./routes/index")(app);

export default app;