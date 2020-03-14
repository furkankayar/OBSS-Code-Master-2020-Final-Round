"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../controllers/index");
module.exports = (app) => {
    app.get('/api/v1/echo/:queryText', index_1.TestController.echo);
    app.put('/api/v1/echo/:queryText', index_1.TestController.putNotSupported);
    app.get('/api/v1/projects', index_1.TestController.projectList);
    app.put('/api/v1/projects', index_1.TestController.putNotSupported);
    app.get('/api/v1/issues/reported-by-leader', index_1.TestController.issueReportedByProjectLeader);
    app.put('/api/v1/issues/reported-by-leader', index_1.TestController.putNotSupported);
    app.post('/api/v1/users/find-top-n-users', index_1.TestController.findTopUsers);
    app.get('/api/v1/users/find-top-n-users', index_1.TestController.getNotSupported);
    app.put('/api/v1/users/find-top-n-users', index_1.TestController.putNotSupported);
    app.post('/api/v1/projects/find-min-n-issues', index_1.TestController.findProjectMinIssues);
    app.put('/api/v1/projects/find-min-n-issues', index_1.TestController.putNotSupported);
    app.get('/api/v1/projects/find-min-n-issues', index_1.TestController.getNotSupported);
    app.get('/test', index_1.TestController.test);
};
//# sourceMappingURL=test.js.map