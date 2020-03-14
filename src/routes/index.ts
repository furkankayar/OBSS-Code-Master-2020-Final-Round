import { Express } from "express";

module.exports = (app: Express) => {

    var testRoutes = require("./test")(app);

    return{
        testRoutes: testRoutes
    }
}