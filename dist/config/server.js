"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
module.exports = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("App is running on %d port %s env", app_1.default.get("port"), app_1.default.get("env"));
});
//# sourceMappingURL=server.js.map