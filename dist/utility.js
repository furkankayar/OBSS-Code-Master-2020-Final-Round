"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendResponse = (code, res, message) => {
    res
        .status(code)
        .json(message);
};
exports.SendResponse = SendResponse;
const IsString = (parameter) => {
    return parameter != null && (typeof parameter === "string" || parameter instanceof String) ? true : false;
};
exports.IsString = IsString;
const FormatDate = (date) => {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    return year + '-' + month + '-' + day;
};
exports.FormatDate = FormatDate;
//# sourceMappingURL=utility.js.map