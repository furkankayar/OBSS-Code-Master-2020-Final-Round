import { Express } from "express";
import { TestController } from "../controllers/index";

module.exports = (app: Express) => {

    app.get('/api/v1/echo/:queryText', TestController.echo);
    app.put('/api/v1/echo/:queryText', TestController.putNotSupported);
    
    app.get('/api/v1/projects', TestController.projectList);
    app.put('/api/v1/projects', TestController.putNotSupported);

    app.get('/api/v1/issues/reported-by-leader', TestController.issueReportedByProjectLeader);
    app.put('/api/v1/issues/reported-by-leader', TestController.putNotSupported);

    app.post('/api/v1/users/find-top-n-users', TestController.findTopUsers);
    app.get('/api/v1/users/find-top-n-users', TestController.getNotSupported);
    app.put('/api/v1/users/find-top-n-users', TestController.putNotSupported);

    app.post('/api/v1/projects/find-min-n-issues', TestController.findProjectMinIssues);
    app.put('/api/v1/projects/find-min-n-issues', TestController.putNotSupported);
    app.get('/api/v1/projects/find-min-n-issues', TestController.getNotSupported);

    app.get('/test', TestController.test);
}