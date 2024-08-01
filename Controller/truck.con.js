import prisma from "../prisma/Client.js";
export const getAllTruck = async (req, res) => {
  try {
    const trucks = await prisma.truck.findMany();
    if (!trucks) return res.status(404).json({ error: "Truck not found" });
    console.log(trucks);
    res.status(200).json({ data: trucks });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const deleteTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTruck = await prisma.truck.delete({
      where: {
        id: Number(id),
      },
    });
    if (!deletedTruck)
      return res.status(404).json({ error: "Truck not found" });
    res.status(200).json({ msg: "Truck deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const activateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const activatedTruck = await prisma.truck.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    if (!activatedTruck)
      return res.status(404).json({ error: "Truck not found" });
    res.status(200).json({ msg: "Truck activated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const deactivateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const deactivatedTruck = await prisma.truck.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    if (!deactivatedTruck)
      return res.status(404).json({ error: "Truck not found" });
    res.status(200).json({ msg: "Truck deactivated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const updateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const updatedTruck = await prisma.truck.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
      },
    });
    if (!updatedTruck)
      return res.status(404).json({ error: "Truck not found" });
    res.status(200).json({ msg: "Truck updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const addTruck = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newTruck = await prisma.truck.create({
      data: {
        name: name,
      },
    });
    res.status(200).json({ msg: "Truck added successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};
