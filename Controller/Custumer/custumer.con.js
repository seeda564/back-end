import bcrypt from "bcrypt";
import prisma from "../../prisma/Client.js";
//add custumer
export const addCustumer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address = "",
      country,
      profileimage = "" || "/static/images/avatar/1.jpg",
    } = req.body;
    console.log(name, email, password, phone, address, country, profileimage);
    if (!validate(name, email, password, phone, address, country, profileimage))
      return res.status(501).json({ error: "All fields are required" });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const custumer = await prisma.custumer.create({
      data: {
        name,
        user: {
          create: {
            email,
            password: hashedPassword,
          },
        },
        phone,
        address,
        country,
        profileimage,
      },
    });

    console.log(custumer);
    res
      .status(201)
      .json({ msg: "custumer created successfully", data: custumer });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: "Internal server error" });
  }
};

//get custumer
export const getCustumer = async (req, res) => {
  try {
    const { id } = req.params;

    const custumer = await prisma.custumer.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });
    if (!custumer) return res.status(404).json({ error: "Custumer not found" });
    res.status(200).json({ data: custumer });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: "Internal server error" });
  }
};

//update custumer
export const updateCustumer = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      email,
      password,
      phone,
      address = "",
      country,
      profileimage = "" || "/static/images/avatar/1.jpg",
    } = req.body;
    if (!validate(name, email, password, phone, address, country, profileimage))
      return res.status(501).json({ error: "All fields are required" });
    const hashedPassword = bcrypt.hashSync(password, 10);
    const custumer = await prisma.custumer.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!custumer) return res.status(404).json({ error: "Custumer not found" });
    const updatedCustumer = await prisma.custumer.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        user: {
          update: {
            email,
            password: hashedPassword,
          },
        },
        phone,
        address,
        country,
        profileimage,
      },
    });
    if (!updatedCustumer)
      return res.status(404).json({ error: "Custumer not found" });
    res
      .status(200)
      .json({ msg: "custumer updated successfully", data: custumer });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: " Internal server error" });
  }
};

//delete custumer
export const deleteCustumer = async (req, res) => {
  try {
    const { id } = req.params;
    const custumer = await prisma.custumer.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!custumer) return res.status(404).json({ error: "Custumer not found" });
    const deletedCustumer = await prisma.custumer.delete({
      where: {
        id: Number(id),
      },
    });
    res
      .status(200)
      .json({ msg: "custumer deleted successfully", data: deletedCustumer });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: " Internal server error" });
  }
};

//get all custumers
export const getCustumers = async (req, res) => {
  try {
    const custumers = await prisma.custumer.findMany({
      include: {
        user: true,
      },
    });
    if (!custumers)
      return res.status(404).json({ error: "No custumers found" });
    res.status(200).json({ data: custumers });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: " Internal server error" });
  }
};

export const deactivateCustumer = async (req, res) => {
  try {
    const { id } = req.params;
    const custumer = await prisma.custumer.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!custumer) return res.status(404).json({ error: "Custumer not found" });
    const deactivatedCustumer = await prisma.custumer.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    if (!deactivatedCustumer)
      return res.status(404).json({ error: "Custumer not found" });
    res.status(200).json({
      msg: "custumer deactivated successfully",
      data: deactivatedCustumer,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: " Internal server error" });
  }
};

export const activateCustumer = async (req, res) => {
  try {
    const { id } = req.params;
    const custumer = await prisma.custumer.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!custumer) return res.status(404).json({ error: "Custumer not found" });
    const activatedCustumer = await prisma.custumer.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    if (!activatedCustumer)
      return res.status(404).json({ error: "Custumer not found" });
    res.status(200).json({
      msg: "custumer activated successfully",
      data: activatedCustumer,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ error: " Internal server error" });
  }
};

const validate = (
  name,
  email,
  password,
  phone,
  address,
  country,
  profileimage
) => {
  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !country ||
    !profileimage
  ) {
    return false;
  }
  return true;
};
