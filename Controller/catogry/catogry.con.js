import prisma from "../../prisma/Client.js";
export const addcatogry = async (req, res) => {
  try {
    const { name, image } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const newcatogry = await prisma.catogry.create({
      data: {
        name: name,
        image: image || "/static/images/avatar/1.jpg",
      },
    });
    res
      .status(200)
      .json({ msg: "catogry added successfully", data: newcatogry });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getcatogrys = async (req, res) => {
  try {
    const catogrys = await prisma.catogry.findMany();
    res.status(200).json({ data: catogrys });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getcatogry = async (req, res) => {
  try {
    const { id } = req.params;
    const catogry = await prisma.catogry.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!catogry) {
      return res.status(404).json({ error: "catogry not found" });
    }
    res.status(200).json({ data: catogry });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deletecatogry = async (req, res) => {
  try {
    const { id } = req.params;
    const catogry = await prisma.catogry.delete({
      where: {
        id: Number(id),
      },
    });
    if (!catogry) {
      return res.status(404).json({ error: "catogry not found" });
    }
    res.status(200).json({ msg: "catogry deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const updatecatogry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const catogryT = await prisma.catogry.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!catogryT) {
      return res.status(404).json({ error: "catogry not found" });
    }

    const catogry = await prisma.catogry.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        image: image || "/static/images/avatar/1.jpg",
      },
    });
    if (!catogry) {
      return res.status(404).json({ error: "catogry not found" });
    }
    res.status(200).json({ msg: "catogry updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
