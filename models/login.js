import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  usuario: String,
  contraseña: String,
});

const login = mongoose.model("login", postSchema);

export default login;
