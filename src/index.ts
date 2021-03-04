import { createConnection } from "typeorm";
import Server from "./server/server";
import Route from "./routes/router";

createConnection()

const app = Server
app.use(Route)