import express from "express";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'
import {conectDB} from './db.js'
import inicio from "./router/inicio.js";
import __dirname from "./herramientas/dirname.js";
import path from "path";
const app = express();
config();
conectDB();

const dirname = path.join(__dirname, "../"); //se coloca la página en el directorio actual
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", dirname + "/views");
app.use(express.static(dirname + "/public"));

app.use("/", inicio);

app.listen(process.env.PORT);
