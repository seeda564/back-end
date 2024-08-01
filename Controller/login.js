import ApiRespones from "../Helper/ApiRespones.js";
import genrateToken from "../Helper/genrateToken.js";
import prisma from "../prisma/Client.js";
import bcrypt from "bcrypt";
export const alogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!validate(email, password)) {
      return res.status(501).json({ error: "All fields are required" });
    }
    const user = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }

    const token = genrateToken(user.id, res);
    console.log(token);

    return res
      .status(201)
      .json({ msg: "login success", data: user, token: token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
const validate = (email, password) => {
  if (!email || !password) {
    return false;
  }
  return true;
};
