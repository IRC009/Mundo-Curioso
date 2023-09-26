import postModel from "../models/posts.js";
import loginModel from "../models/login.js";
import jwt from "jsonwebtoken";
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const inicio = async (req, res) => {
  const posts = await postModel.find().sort({ date: -1 }).exec();
  const popular = await postModel.find().sort({ visited: -1 }).exec();
  res.render("index", { posts, popular, meses });
};

export const detail = async (req, res) => {
  const param = req.params.id;
  const post = await postModel.findById(param);
  const popular = await postModel.find().sort({ visited: -1 }).exec();

  post.visited = post.visited + 1;
  console.log(post.popular);
  await postModel.findByIdAndUpdate(param, post, {
    useFindAndModify: false,
    new: true, //esto devuelve el documento actualizado
  });

  res.render("detail", { post, meses, popular });
};

export const login = async (req, res) => {
  res.render("L");
};

export const loginPost = async (req, res) => {
  const body = req.body;
  const user = await loginModel.findOne({ usuario: body.usuario });
  if (!user) {
    return res.json({
      msg: "usuario no existe",
    });
  }
  if (body.contraseña != user.contraseña) {
    return res.json({ msg: "contraseña invalida" });
  }
  const token = jwt.sign(
    {
      data: user._id,
    },
    process.env.TOKEN_SECRET
  );
  res.cookie("TTT", token, { httpOnly: true });
  res.redirect("/dashboard");
};

export const dashboard = async (req, res) => {
  const posts = await postModel.find();
  res.render("dashboard", { posts, meses });
};

export const newPost = (req, res) => {
  res.render("newpost");
};

export const createPost = async (req, res) => {
  const body = req.body;
  const data = new postModel(body);
  const post = await data.save();
  console.log(body);
  res.redirect("/dashboard");
};

export const editPost = async (req, res) => {
  const param = req.params.id;
  const post = await postModel.findById(param);
  res.render("editPost", { post });
};

export const putPost = async (req, res) => {
  const param = req.params.id;
  const body = req.body;
  console.log(body);
  const respuesta = await postModel.findByIdAndUpdate(param, body, {
    useFindAndModify: false,
  });
  res.json({ msg: "actualizado correctamente" });
};

export const deletePost = async (req, res) => {
  const param = req.params.id;
  const post = await postModel.findByIdAndDelete(param);
  res.json({ post });
};
export const cerrarSesion = (req, res) => {
  res.clearCookie("TTT");
  res.end();
};
export const categoria = async (req, res) => {
  const param = req.params.id;
  const regex = new RegExp(param, "i"); // i para hacerla insensible a mayusculas y minusculas, regex me sirve para encontrar una de las multiples etiquetas que pueden haber en etiqueta.
  const post = await postModel.find({ etiqueta: regex });
  res.render("categoria", { post, meses, param });
};
export const contactos = (req, res) => {
  res.render("contactos");
};
export const sobrenosotros = (req, res) => {
  res.render("sobrenosotros");
};
