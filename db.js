import mongoose from "mongoose";
export const conectDB = () => {
  mongoose
    .connect(process.env.URL)
    .then(console.log("db conectada"))
    .catch((e) => {
      console.log("error db" + e);
    });
};
