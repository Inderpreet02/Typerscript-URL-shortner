import express from "express"
import config from 'config'
import routes from "./routes";
import cors from 'cors'
import bodyParser from "body-parser";
import db from './db'

const app = express();

app.use(cors());
app.use(bodyParser.json())

const port = config.get("port")

app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`);
    db();
    routes(app);
})