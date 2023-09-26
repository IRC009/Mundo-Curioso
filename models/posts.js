import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  img:String,
  title: String,
  content: String,
  etiqueta:String,
  description: String,
  author: { type: String, default: "MundoCurioso" },
  keywords: String,
  visited: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
