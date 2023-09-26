import express from "express";
import { validateToken } from "../middlewares/valideToken.js";
import {
  inicio,
  login,
  loginPost,
  detail,
  dashboard,
  newPost,
  editPost,
  createPost,
  deletePost,
  putPost,
  cerrarSesion,
  categoria,
  contactos,
  sobrenosotros,
} from "./components.js";
const Routes = express.Router();

Routes.get("/", inicio);
Routes.get("/blogs/:id", detail);
Routes.get("/L", login);
Routes.post("/L", loginPost);
Routes.get("/dashboard", validateToken, dashboard);
Routes.get("/newpost", validateToken, newPost);
Routes.post("/newPost", validateToken, createPost);
Routes.get("/editPost/:id", validateToken, editPost);
Routes.put("/edit/:id", validateToken, putPost);
Routes.delete("/delete/:id", validateToken, deletePost);
Routes.get("/cerrarsesion", validateToken, cerrarSesion);
Routes.get("/categoria/:id", categoria);
Routes.get("/contactos", contactos);
Routes.get("/sobrenosotros", sobrenosotros);

export default Routes;
