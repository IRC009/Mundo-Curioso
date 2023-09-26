import jwt from "jsonwebtoken";

export const validateToken = (req,res,next) => {
  const token = req.cookies.TTT;
  if (!token) {
    return res.status(401).json({ msg: "acceso denegado" });
  }
  try {
    const verificar = jwt.verify(token,process.env.TOKEN_SECRET);
    req.user = verificar;
    next();
  } catch (error) {
    return res.satus(400).json({ msg: "token no es valido" });
  }
};
