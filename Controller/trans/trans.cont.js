import bcrypt from "bcrypt";
import prisma from "../../prisma/Client.js";
//add Transpoter
export const addTrans = async (req, res) => {
  try {
    const {
      name,
      phone,
      companyName,
      yearsInBusiness,
      cargoType,
      goodCategory,
      profileimage,
      businessDescription = "",
      address = "",
      country,
      state,
      city,
      email,
      password,
    } = req.body;
    console.log(
      name,
      phone,
      companyName,
      yearsInBusiness,
      cargoType,
      goodCategory,
      profileimage,
      businessDescription,
      address,
      country,
      state,
      city,
      email,
      password
    );
    if (
      !name ||
      !phone ||
      !companyName ||
      !yearsInBusiness ||
      !cargoType ||
      !goodCategory ||
      !profileimage ||
      !businessDescription ||
      !address ||
      !country ||
      !state ||
      !city ||
      !email ||
      !password
    ) {
      return res.status(501).json({ error: "All fields are required" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res
        .status(501)
        .json({ error: "User allready exist or Email is Duplicate" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const trans = await prisma.transporter.create({
      data: {
        name,
        phone,
        companyName,
        yearsInBusiness: Number(yearsInBusiness),
        cargoType,
        goodCategory: goodCategory.toString(),
        profileimage,
        businessDescription,
        address,
        country,
        state,
        city,
        user: {
          create: {
            email,
            password: hashedPassword,
            role: "TRANSPORTER",
          },
        },
      },
    });
    res.status(201).json({ msg: "trans added successfully", data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
//get all Transpoter
export const getallTrans = async (req, res) => {
  try {
    const trans = await prisma.transporter.findMany({
      include: {
        user: true,
      },
    });

    if (!trans) return res.status(404).json({ error: "No trans found" });
    res.status(200).json({ data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
//update Transpoter
export const updateTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      phone,
      companyName,
      yearsInBusiness,
      cargoType,
      goodCategory,
      profileimage,
      businessDescription,
      address,
      country,
      state,
      city,
      email,
      password,
    } = req.body;
    if (
      !name ||
      !phone ||
      !companyName ||
      !yearsInBusiness ||
      !cargoType ||
      !goodCategory ||
      !profileimage ||
      !businessDescription ||
      !address ||
      !country ||
      !state ||
      !city ||
      !email ||
      !password
    ) {
      return res.status(501).json({ error: "All fields are required" });
    }
    console.log(goodCategory.toString());
    const transp = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!transp) return res.status(404).json({ error: "No trans found" });
    const hashedPassword = bcrypt.hashSync(password, 10);
    const trans = await prisma.transporter.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        phone,
        companyName,
        yearsInBusiness: Number(yearsInBusiness),
        cargoType,
        goodCategory: goodCategory.toString(),
        profileimage,
        businessDescription,
        address,
        country,
        state,
        city,
        user: {
          update: {
            email,
            password: hashedPassword,
            role: "TRANSPORTER",
          },
        },
      },
    });
    res.status(201).json({ msg: "trans updated successfully", data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: " Internal server error" });
  }
};
//delete Transpoter
export const deleteTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const transp = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!transp) return res.status(404).json({ error: "No trans found" });
    const trans = await prisma.transporter.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(201).json({ msg: "trans deleted successfully", data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const activateTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const transp = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!transp) return res.status(404).json({ error: "No trans found" });
    const trans = await prisma.transporter.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    res.status(201).json({ msg: "trans activated successfully", data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deactivateTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const transp = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!transp) return res.status(404).json({ error: "No trans found" });
    const trans = await prisma.transporter.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    res
      .status(201)
      .json({ msg: "trans deactivated successfully", data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const transp = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });
    if (!transp) return res.status(404).json({ error: "No trans found" });
    res.status(200).json({ data: transp });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
