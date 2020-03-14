"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
    }
    static getServer() {
        if (this.server === undefined) {
            this.server = require("./server");
        }
        return this.server;
    }
}
exports.Config = Config;
if (process.env.NODE_ENV !== "TEST") {
    Config.getServer();
}
//# sourceMappingURL=index.js.map