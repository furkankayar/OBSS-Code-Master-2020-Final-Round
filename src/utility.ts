import { Response } from "express";

const SendResponse = (code: number, res: Response, message: object | string) => {
    
    res
        .status(code)
        .json(message);
}

const IsString = (parameter: any) => {
    return parameter != null && (typeof parameter === "string" || parameter instanceof String) ? true : false; 
} 

const FormatDate = (date: any) => {

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
  
    return year + '-' + month + '-' + day;
}

export { SendResponse , IsString, FormatDate };