import 'dotenv/config'
import {Express} from "express";
import {createConnection} from "typeorm";
import express from "express"
import cors from "cors";
import {typeormConnectionOptions} from "../../ormconfig";

const app = express();
const corsOptions: cors.CorsOptions = {
    origin: process.env.CORS_ORIGIN,
};
if(!process.env.production){
    delete(corsOptions.origin);
}

app.use(express.json());
app.use(cors(corsOptions));

export async function getApp(): Promise<Express> {
    return new Promise(async resolve => {
        console.log(typeormConnectionOptions)
        await createConnection(typeormConnectionOptions);
        // I would like to have services provided with connection
        // meaning we need to connect to DB first
        const module = await import("../routes/routes")
        app.use(module.default);
        resolve(app);
    })

}
