import prisma from "../../prisma/Client.js";
export const addCargo = async (req, res) => {
  try {
    const { name } = req.body;
    const newCargo = await prisma.cargoType.create({
      data: {
        name: name,
      },
    });
    res.status(200).json({ msg: "cargo added successfully", data: newCargo });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getCargos = async (req, res) => {
  try {
    const cargos = await prisma.cargoType.findMany();
    res.status(200).json({ data: cargos });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getCargo = async (req, res) => {
  try {
    const { id } = req.params;
    const cargo = await prisma.cargoType.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!cargo) {
      return res.status(404).json({ error: "Cargo not found" });
    }
    res.status(200).json({ data: cargo });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteCargo = async (req, res) => {
  try {
    const { id } = req.params;
    const cargo = await prisma.cargoType.delete({
      where: {
        id: Number(id),
      },
    });
    if (!cargo) {
      return res.status(404).json({ error: "Cargo not found" });
    }
    res.status(200).json({ msg: "Cargo deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const updateCargo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const cargoT = await prisma.cargoType.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!cargoT) {
      return res.status(404).json({ error: "Cargo not found" });
    }

    const cargo = await prisma.cargoType.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
      },
    });
    if (!cargo) {
      return res.status(404).json({ error: "Cargo not found" });
    }
    res.status(200).json({ msg: "Cargo updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
