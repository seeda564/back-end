import bcrypt from "bcrypt";
import genrateToken from "../../Helper/genrateToken.js";
import prisma from "../../prisma/Client.js";

export const getData = async (req, res) => {
  try {
    // const id= req.userId
    const { id } = req.params;
    const trans = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!validate(email, password)) {
      return res.status(501).json({ error: "All fields are required" });
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },

      include: {
        transporter: true,
        custumer: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // if (user.role !== "TRANSPORTER") {
    //   return res
    //     .status(404)
    //     .json({ error: "User not found role is not transporter" });
    // }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }

    const token = genrateToken(user.id, res);
    console.log(token);
    res.status(200).json({ data: user, token });
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

export const myDrivers = async (req, res) => {
  try {
    const { id } = req.params;
    const trans = await prisma.driver.findMany({
      where: {
        transporterId: Number(id),
      },
    });
    if (!trans) return res.status(404).json({ error: "No trans found" });
    res.status(200).json({ data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const myTrucks = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const trans = await prisma.truck.findMany({
      where: {
        transporterId: Number(id),
      },
    });
    if (!trans) return res.status(404).json({ error: "No trans found" });
    res.status(200).json({ data: trans });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const addDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, licence, howlong, image } = req.body;
    console.log(id, name, phone, licence, howlong, image);

    const driver = await prisma.driver.create({
      data: {
        name,
        email,
        phone,
        licence,
        howlong,
        image,
        transporterId: Number(id),
      },
    });
    res.status(200).json({ data: driver });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

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

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, newPassword } = req.body;
    if (!password || !newPassword) {
      return res.status(501).json({ error: "All fields are required" });
    }

    if (password === newPassword) {
      return res.status(501).json({ error: "password not changed" });
    }
    const user1 = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user1) return res.status(404).json({ error: "No user found" });
    const isMatch = await bcrypt.compare(password, user1.password);
    if (!isMatch) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        password: hashedPassword,
      },
    });
    res.status(201).json({ msg: "password updated successfully", data: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: " Internal server error" });
  }
};

export const addJourny = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, fromLocation, toLocation } = req.body;
    console.log(id, title, fromLocation, toLocation);
    if (!title || !fromLocation || !toLocation) {
      return res.status(501).json({ error: "All fields are required" });
    }
    const trans = await prisma.transporter.findUnique({
      where: {
        id: Number(id),
      },
    });
    const journy = await prisma.journey.create({
      data: {
        title,
        fromLocation,
        toLocation,
        createdAt: new Date(),
        transportername: trans.name,
        transporterId: Number(id),
      },
    });
    res.status(200).json({ data: journy });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getJourny = async (req, res) => {
  try {
    const { id } = req.params;
    const journy = await prisma.journey.findMany({
      where: {
        transporterId: Number(id),
      },
    });
    if (!journy) return res.status(404).json({ error: "No journy found" });
    res.status(200).json({ data: journy });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const addtruck = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      trucknumber,
      name,
      cargoType = "",
      make = "",
      color = "",
      capacity = "",
      other = "",
      image = "",
    } = req.body;
    console.log(
      id,
      trucknumber,
      cargoType,
      make,
      color,
      capacity,
      other,
      image,
      name
    );
    if (!trucknumber) {
      return res.status(501).json({ error: "you must provide trucknumber" });
    }

    const truck = await prisma.truck.create({
      data: {
        trucknumber,
        name,
        cargoType,
        make,
        color,
        capacity,
        other,
        image,
        transporterId: Number(id),
      },
    });
    res.status(200).json({ data: truck });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteTruck = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const truck = await prisma.truck.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: truck });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteJourny = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const journy = await prisma.journey.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: journy });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deActivateJourny = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const journy = await prisma.journey.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    res.status(200).json({ data: journy });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const activateJourny = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const journy = await prisma.journey.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    res.status(200).json({ data: journy });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const driver = await prisma.driver.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: driver });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getQuote = async (req, res) => {
  try {
    let data = [];
    const { id } = req.params;
    const quote = await prisma.quate.findMany({
      where: {
        AND: [{ transporterId: Number(id) }, { status: "ACTIVE" }],
      },
    });
    if (!quote) return res.status(404).json({ error: "No quote found" });
    //console.log(quote);
    const len = quote.length;

    for (let i = 0; i < len; i++) {
      const shipment = await prisma.shipmentAndQuate.findUnique({
        where: {
          quateId: Number(quote[i].id),
        },
        include: {
          shipmentdetail: true,
        },
      });
      if (shipment) data.push(shipment);
    }
    console.log(len);
    for (let i = 0; i < data.length; i++) {
      // console.log("custumer id ", data[i].shipmentdetail.custumerId);
      const custumer = await prisma.custumer.findUnique({
        where: {
          id: Number(data[i].shipmentdetail.custumerId),
        },
      });

      //console.log(custumer);
      data[i].shipmentdetail.custumer = custumer;
      //console.log(data[i].shipmentdetail.custumer);
    }

    res.status(200).json({ data: data, quotes: quote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const addquote = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, amount, description, shipmentId, truckId, driverId } =
      req.body;
    console.log(shipmentId, id);
    console.log(truckId, driverId);
    const ship = await prisma.shipmentdetail.findUnique({
      where: {
        id: Number(shipmentId),
      },
    });
    console.log(ship);
    const custumerId = ship.custumerId;
    const check = await prisma.quate.findMany({
      where: {
        transporterId: Number(id),
      },
    });
    for (let i = 0; i < check.length; i++) {
      if (check[i].shipmentdetailId == Number(shipmentId)) {
        return res
          .status(404)
          .json({ error: "Quote already Submitted for this shipment" });
      }
    }
    const quote = await prisma.quate.create({
      data: {
        name,
        amount,
        description,
        transporterId: Number(id),
        shipmentdetailId: Number(shipmentId),
        driverId: Number(driverId),
        truckId: Number(truckId),
      },
    });

    const quoteAndShipment = await prisma.shipmentAndQuate.create({
      data: {
        shipmentdetailId: Number(shipmentId),
        quateId: Number(quote.id),
      },
    });
    if (!quote) return res.status(404).json({ error: "No quote found" });
    if (!quoteAndShipment)
      return res.status(404).json({ error: "No quote and shipment found" });
    res.status(200).json({ data: quote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Quote already Submitted" });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const quote1 = await prisma.shipmentAndQuate.findUnique({
      where: {
        id: Number(id),
      },
    });
    const qid = quote1.quateId;
    const quote = await prisma.quate.delete({
      where: {
        id: Number(qid),
      },
    });
    // const quoteAndShipment = await prisma.shipmentAndQuate.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // });
    if (!quote) return res.status(404).json({ error: "No quote found" });
    // if (!quoteAndShipment)
    //   return res.status(404).json({ error: "No quote and shipment found" });
    res.status(200).json({ data: quote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
