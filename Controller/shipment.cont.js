import prisma from "../prisma/Client.js";
export const getShipments = async (req, res) => {
  try {
    const shipments = await prisma.shipment.findMany({
      select: {
        id: true,
        createdAt: true,
        status: true,
        shipmentdetail: {
          select: {
            name: true,
            custumer: {
              select: {
                name: true,
                id: true,
              },
            },
            freight: {
              select: {
                name: true,
              },
            },
            catogry: {
              select: {
                name: true,
              },
            },
          },
        },

        quate: {
          select: {
            id: true,
            amount: true,
            transporter: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json({ data: shipments });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteShipments = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const shipment = await prisma.shipment.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deactivateShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipment.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const activateShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipment.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const addShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      catogry,
      freight,
      pickupDate,
      image = "/static/images/avatar/1.jpg",
      pickupPlace,
      distinationPlace,
      delveredTo,
      delvPhone,
      iname,
      quantity,
      hight,
      width,
      weight,
      discription,
    } = req.body;
    const catog = await prisma.catogry.findUnique({
      where: {
        name: catogry,
      },
    });

    if (!catog) {
      return res.status(404).json({ error: "catogry not found" });
    }
    console.log(freight);
    const frei = String(freight);
    console.log(frei);
    let item = null;

    const shipment = await prisma.shipmentdetail.create({
      data: {
        name,
        catogryId: catog.id,
        catname: catog.name,
        fri: frei,
        pickupDate,
        image,
        pickupPlace,
        distinationPlace,
        custumerId: Number(id),
        delveredTo,
        delvPhone,
      },
    });
    if (
      shipment &&
      (iname || quantity || hight || width || weight || discription)
    ) {
      item = await prisma.item.create({
        data: {
          name: iname,
          quantity,
          hight,
          width,
          weight,
          discription,
        },
      });
      await prisma.shipmentdetail.update({
        where: {
          id: shipment.id,
        },
        data: {
          itemId: item.id,
        },
      });
    }

    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getShipment1 = async (req, res) => {
  try {
    console.log("testing from shipment get shipment 1 ");
    const { id } = req.params;
    let d = [];
    const count = await prisma.shipmentAndQuate.count({
      where: {
        AND: [{ shipmentdetailId: Number(id) }, { status: "ACTIVE" }],
      },
    });

    for (let i = 0; i < count; i++) {
      const ship = await prisma.shipmentAndQuate.findMany({
        where: {
          AND: [{ shipmentdetailId: Number(id) }, { status: "ACTIVE" }],
        },
        include: {
          quate: {
            include: {
              transporter: true,
            },
          },
          shipmentdetail: true,
        },
      });
      if (ship.length > 0) d = ship;
    }
    //console.log(d);
    res.status(200).json({ data: d });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteShipmentDetail = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const shipment = await prisma.shipmentdetail.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getShipmentDetail = async (req, res) => {
  try {
    const shipment = await prisma.shipmentdetail.findMany({
      where: {
        status: "ACTIVE",
      },
    });
    console.log(shipment.length);
    if (!shipment) return res.status(404).json({ error: "No shipment found" });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getShipmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipmentdetail.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (shipment.status === "INACTIVE")
      return res.status(404).json({ error: "No shipment found" });
    if (!shipment) return res.status(404).json({ error: "No shipment found" });
    console.log(shipment);
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipmentdetail.findMany({
      where: {
        AND: [{ custumerId: Number(id) }, { status: "ACTIVE" }],
      },
    });
    console.log(shipment);
    if (!shipment) return res.status(404).json({ error: "No shipment found" });
    for (let i = 0; i < shipment.length; i++) {
      const count = await prisma.shipmentAndQuate.count({
        where: {
          AND: [
            { shipmentdetailId: Number(shipment[i].id) },
            { status: "ACTIVE" },
          ],
        },
      });
      shipment[i].count = count;
    }
    //console.log(shipment);
    for (let i = 0; i < shipment.length; i++) {
      const ship = await prisma.shipmentAndQuate.findMany({
        where: {
          AND: [
            { shipmentdetailId: Number(shipment[i].id) },
            { status: "ACTIVE" },
          ],
        },
        include: {
          quate: {
            include: {
              transporter: true,
            },
          },
          shipmentdetail: true,
        },
      });
      if (ship) shipment[i].ship = ship;
    }
    console.log(shipment);
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const acceptShipmentQuate = async (req, res) => {
  try {
    console.log("accepting shipment");
    const { id } = req.params;
    const shipandquate = await prisma.shipmentAndQuate.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        shipmentdetail: true,
        quate: {
          include: {
            transporter: true,
          },
        },
      },
    });

    if (!shipandquate)
      return res.status(404).json({ error: "No shipment found" });
    console.log(shipandquate);
    const shipment = await prisma.shipment.create({
      data: {
        shipmentdetailId: shipandquate.shipmentdetailId,
        quateId: shipandquate.quateId,
        transporterId: shipandquate.quate.transporterId,
        custumerId: shipandquate.shipmentdetail.custumerId,
      },
    });
    res.status(200).json({ data: shipment });
    await prisma.shipmentAndQuate.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    await prisma.quate.update({
      where: {
        id: shipandquate.quateId,
      },
      data: {
        status: "INACTIVE",
      },
    });
    await prisma.shipmentdetail.update({
      where: {
        id: shipandquate.shipmentdetailId,
      },
      data: {
        status: "INACTIVE",
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getCustumerAcceptedShipments = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipment.findMany({
      where: {
        custumerId: Number(id),
      },
      include: {
        shipmentdetail: true,
        quate: {
          include: {
            transporter: true,
          },
        },
      },
    });
    // console.log(shipment.quate);
    for (let i = 0; i < shipment.length; i++) {
      const driver = await prisma.driver.findUnique({
        where: {
          id: shipment[i].quate.driverId,
        },
      });
      shipment[i].driver = driver;
      console.log("'ID data in controller", shipment[i].quate);
      console.log("driver data in controller", driver);
      const truck = await prisma.truck.findUnique({
        where: {
          id: shipment[i].quate.truckId,
        },
      });
      // console.log("truck data in controller", truck);
      shipment[i].truck = truck;
    }
    for (let i = 0; i < shipment.length; i++) {
      if (shipment[i].shipmentdetail.itemId != null) {
        const item = await prisma.item.findUnique({
          where: {
            id: shipment[i].shipmentdetail.itemId,
          },
        });
        shipment[i].shipmentdetail.item = item;
      }
    }
    //console.log(shipment);
    if (!shipment) return res.status(404).json({ error: "No shipment found" });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getTransAcceptedShipments = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await prisma.shipment.findMany({
      where: {
        transporterId: Number(id),
      },
      include: {
        shipmentdetail: {
          include: {
            custumer: true,
          },
        },
        quate: {
          include: {
            transporter: true,
          },
        },
      },
    });
    console.log("shipment data in controller", shipment);
    for (let i = 0; i < shipment.length; i++) {
      const driver = await prisma.driver.findUnique({
        where: {
          id: shipment[i].quate.driverId,
        },
      });
      shipment[i].driver = driver;
      const truck = await prisma.truck.findUnique({
        where: {
          id: shipment[i].quate.truckId,
        },
      });
      console.log(truck);
      shipment[i].truck = truck;
    }
    for (let i = 0; i < shipment.length; i++) {
      if (shipment[i].shipmentdetail.itemId != null) {
        const item = await prisma.item.findUnique({
          where: {
            id: shipment[i].shipmentdetail.itemId,
          },
        });
        shipment[i].shipmentdetail.item = item;
      }
    }
    console.log(shipment);
    if (!shipment) return res.status(404).json({ error: "No shipment found" });
    res.status(200).json({ data: shipment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
