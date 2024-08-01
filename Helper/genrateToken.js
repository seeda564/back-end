import jwt from "jsonwebtoken";
const genrateToken = (ID, res) => {
  const token = jwt.sign({ ID }, process.env.SECRET, {
    expiresIn: 24 * 60 * 60,
  });
  res.cookie("token", token, {
    //httpOnly: true,
  });
  return token;
};
export default genrateToken;
