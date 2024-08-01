import jwt from "jsonwebtoken";
import ErrorHandler from "../Helper/Erorhandler.js";
export const ProtectRoute = (req, res, next) => {
  try {
    const token = req.headers["authorization"].replace("Bearer ", "");

    console.log("token", token);
    if (!token) {
      const error = new ErrorHandler();
      error.statusCode = 401;
      error.message = " Not autherized";
      return res.send(error);
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    if (!decoded) {
      const error = new ErrorHandler();
      error.statusCode = 401;
      error.message = "unvalid token or expired";
      return res.send(error);
    }
    console.log("succufully decoded");
    req.userId = decoded.ID;
    console.log("req.userId", req.userId);
    next();
  } catch (error) {
    console.log(error.message);
    const err = new ErrorHandler();
    err.statusCode = 500;
    err.message = error.message;
    return res.send(err);
  }
};
