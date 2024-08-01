import prisma from "../prisma/Client.js";
export const addCountry = async (req, res) => {
  const { name } = req.body;
  try {
    const country = await prisma.country.create({
      data: {
        name,
      },
    });
    res.status(200).json({ data: country });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getCountry = async (req, res) => {
  try {
    const country = await prisma.country.findMany({
      include: {
        state: true,
      },
    });
    res.status(200).json({ data: country });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

// state
export const addState = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const state = await prisma.country.update({
      where: {
        id: Number(id),
      },
      data: {
        state: {
          create: {
            name,
          },
        },
      },
    });
    res.status(200).json({ data: state });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getState = async (req, res) => {
  const { id } = req.params;
  try {
    const states = await prisma.country.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        state: true,
      },
    });
    res.status(200).json({ data: states });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getStates = async (req, res) => {
  try {
    const { id } = req.params;
    const states = await prisma.country.findMany({
      where: {
        id: Number(id),
      },
      include: {
        state: true,
      },
    });
    res.status(200).json({ data: states });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteState = async (req, res) => {
  const { id } = req.params;

  try {
    const state = await prisma.state.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: state });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
// city

export const addCity = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  try {
    const city = await prisma.state.update({
      where: {
        id: Number(id),
      },
      data: {
        city: {
          create: {
            name,
          },
        },
      },
    });
    res.status(200).json({ data: city });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getcities = async (req, res) => {
  try {
    const { id } = req.params;
    const cities = await prisma.state.findMany({
      where: {
        id: Number(id),
      },
      include: {
        city: true,
      },
    });
    console.log(cities);
    res.status(200).json({ data: cities });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteCity = async (req, res) => {
  const { id } = req.params;
  try {
    const city = await prisma.city.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: city });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getCity = async (req, res) => {
  const { id } = req.params;
  try {
    const city = await prisma.city.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ data: city });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
