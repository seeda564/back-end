import bcrypt from "bcrypt";
import prisma from "../../prisma/Client.js";
import "dotenv/config";
const createAdmin = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const username = process.env.ADMIN_USERNAME;
  const role = "ADMIN";
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);
  const adminres = await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
      username,
    },
  });
  console.log(adminres);
};

createAdmin();
