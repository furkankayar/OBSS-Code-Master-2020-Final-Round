"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    static echo(req, res) {
        let queryText = req.params.queryText;
        return res
            .status(200)
            .send(queryText);
    }
}
exports.TestController = TestController;
//# sourceMappingURL=test.js.map