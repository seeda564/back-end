import prisma from "../prisma/Client.js";

export const getDashboard = async (req, res) => {
  try {
    const activateCustomers = await prisma.custumer.count({
      where: {
        status: "ACTIVE",
      },
    });
    console.log(activateCustomers);
    const inactiveCustomers = await prisma.custumer.count({
      where: {
        status: "INACTIVE",
      },
    });
    console.log(inactiveCustomers);

    const activeTruck = await prisma.truck.count({
      where: {
        status: "ACTIVE",
      },
    });
    console.log(activeTruck);
    const inactiveTruck = await prisma.truck.count({
      where: {
        status: "INACTIVE",
      },
    });
    console.log(inactiveTruck);

    const activeShipment = await prisma.shipment.count({
      where: {
        status: "ACTIVE",
      },
    });
    const inactiveShipment = await prisma.shipment.count({
      where: {
        status: "INACTIVE",
      },
    });
    const activeTrans = await prisma.transporter.count({
      where: {
        status: "ACTIVE",
      },
    });
    const inactiveTrans = await prisma.transporter.count({
      where: {
        status: "INACTIVE",
      },
    });
    const activeJourny = await prisma.journey.count({
      where: {
        status: "ACTIVE",
      },
    });
    const inactiveJourny = await prisma.journey.count({
      where: {
        status: "INACTIVE",
      },
    });
    const totalShipment = await prisma.shipmentAndQuate.count({});
    res.status(200).json({
      activateCustomers,
      inactiveCustomers,
      activeTruck,
      inactiveTruck,
      activeShipment,
      inactiveShipment,
      activeTrans,
      inactiveTrans,
      activeJourny,
      inactiveJourny,
      totalShipment,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
