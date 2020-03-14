import { Server } from "http";
import { Sequelize } from "sequelize";

export class Config{
    private static server: Server;

    private constructor(){
    }

    static getServer(): Server{
        if(this.server === undefined){
            this.server = require("./server");
        }

        return this.server;
    }
}

if(process.env.NODE_ENV !== "TEST"){
    Config.getServer();
}