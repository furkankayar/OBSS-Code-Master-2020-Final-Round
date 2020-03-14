import { Request, Response } from "express";
import { SendResponse, IsString, FormatDate } from "../utility";
import axios from "axios";


class TestController{
    
    static echo(req: Request, res: Response): any{

        let queryText = req.params.queryText;
        
        return res
            .status(200)
            .send(queryText);
    }

    static projectList(req: Request, res: Response): any{
        
        let jiraUrl = req.query.jiraUrl;

        if(!IsString(jiraUrl) || jiraUrl === ""){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required String parameter 'jiraUrl' is not present"
            });
        }

        axios.get(jiraUrl + "rest/api/2/project")
            .then((response: any) => {
                SendResponse(200, res, response.data);
            })
            .catch((err: any) => {
                return SendResponse(500, res, {
                    timestamp: FormatDate(new Date()),
                    status: 500,
                    errors: "Jira is not available"
                });
            });
    
    }

    static async issueReportedByProjectLeader(req: Request, res: Response){
        
        let jiraUrl = req.query.jiraUrl;
        let projectId = req.query.projectId;

        var result = [];

        if(!IsString(jiraUrl) || jiraUrl === ""){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required String parameter 'jiraUrl' is not present"
            });
        }

        if(!IsString(projectId) || projectId === ""){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required request body is missing"
            });
        }

        try{

            let response = await axios.get(jiraUrl + "rest/api/2/project/" + projectId)
            let leader = response.data.lead.key; 
            
            if(response === null || response === undefined){
                return SendResponse(400, res, {
                    timestamp: FormatDate(new Date()),
                    status: 500,
                    errors: "Jira is not available"
                });
            }

            response = await axios.get(jiraUrl + "rest/api/2/search?jql=");
            
            if(response === null || response === undefined){
                return SendResponse(400, res, {
                    timestamp: FormatDate(new Date()),
                    status: 500,
                    errors: "Jira is not available"
                });
            }
            
            let issues = response.data;
      
            for(let i = 0 ; i < Object.keys(issues.issues).length ; i++){
                if(issues.issues[i].fields.reporter.key === leader){
                    result.push({
                        id: issues.issues[i].id,
                        key: issues.issues[i].key,
                        fields: {
                            assignee: issues.issues[i].fields.assignee,
                            reporter: issues.issues[i].fields.reporter,
                            project: issues.issues[i].fields.project
                        }
                    });
                }
            }
        }
        catch(err){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 500,
                errors: "Jira is not available"
            });
        }


        return SendResponse(200, res, result);
    }

    static findTopUsers(req: Request, res: Response): any{
        
        let jiraUrl = req.params.jiraUrl;
        let topn = req.query.topn;
        let jsonBody = req.body;

        if(jsonBody === null || jsonBody === undefined){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required request body is missing"
            });
        }
        
        if(Object.keys(jsonBody).length === 0){
            return SendResponse(500, res, {
                timestamp: FormatDate(new Date()),
                status: 500,
                errors: "users not found"
            });
        }

        if(!IsString(jiraUrl) || jiraUrl === ""){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required String parameter 'jiraUrl' is not present"
            });
        }

        if(!IsString(topn) || topn === ''){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required String parameter 'topn' is not present"
            });
        }

        return SendResponse(200, res, ':(')
    }

    static async findProjectMinIssues(req: Request, res: Response){

        let jiraUrl = req.query.jiraUrl;
        let minn = req.query.minn;
        let jsonBody = req.body;


        if(jsonBody === null || jsonBody === undefined){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required request body is missing"
            });
        }
        
        if(Object.keys(jsonBody).length === 0){
            return SendResponse(500, res, {
                timestamp: FormatDate(new Date()),
                status: 500,
                errors: "users not found"
            });
        }

        if(!IsString(jiraUrl) || jiraUrl === ""){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 400,
                errors: "Required String parameter 'jiraUrl' is not present"
            });
        }

        if(minn === undefined || minn === null){
            minn = 5;
        }

        var resultArr = [];

        try{
            let response = await axios.get(jiraUrl + "rest/api/2/project");

            if(response === null || response === undefined){
                return SendResponse(400, res, {
                    timestamp: FormatDate(new Date()),
                    status: 500,
                    errors: "Jira is not available"
                });
            }

            let projects = response.data;
            for(let i = 0 ; i < Object.keys(projects).length; i++){
               
               let ans = await axios.get(jiraUrl + "rest/api/2/search?jql=project=" + projects[i].key);
               if(ans === null || ans === undefined){
                    return SendResponse(400, res, {
                        timestamp: FormatDate(new Date()),
                        status: 500,
                        errors: "Jira is not available"
                    });
               }
               let issues = ans.data.issues;
               let counter = 0;
               for(let j = 0 ; j < Object.keys(issues).length ; j++){
                   let reporter = issues[j].fields.reporter;
                   if(reporter.name == jsonBody[1] || reporter.emailAddress == jsonBody[0] || reporter.key == jsonBody[1]){
                       counter += 1;
                   }
               }
    
               if(counter >= parseInt(minn)){
                   resultArr.push({
                       id: projects[i].id,
                       key: projects[i].key,
                       name: projects[i].name,
                       issueCount: counter
                   });
               }
   
            }
        }
        catch(any){
            return SendResponse(400, res, {
                timestamp: FormatDate(new Date()),
                status: 500,
                errors: "Jira is not available"
            });
        }

        return SendResponse(200, res, resultArr);
 
    }

    static getNotSupported(req: Request, res: Response): any{
        return SendResponse(405, res, {
            timestamp: FormatDate(new Date()),
            status: 405,
            errors: "Request method 'GET' not supported"
        });
    }

    static putNotSupported(req: Request, res: Response): any{
        return SendResponse(405, res, {
            timestamp: FormatDate(new Date()),
            status: 405,
            errors: "Request method 'PUT' not supported"
        });
    }

    static test(req: Request, res: Response): any{
        
        axios.get("https://api.themoviedb.org/3/movie/550?api_key=6b080614b119a4a88bc82be6b2eeca68")
            .then((result: any) => {

                let response = result.data;
                console.log(response.production_companies[0].name);
            });
    }

}



export { TestController };