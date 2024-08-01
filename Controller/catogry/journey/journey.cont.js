import prisma from "../../../prisma/Client.js";
export const addjourney = async (req, res) => {
  try {
    console.log("hello");
    const { title, fromLocation, toLocation, transporterId, transportername } =
      req.body;
    console.log(title, fromLocation, toLocation, transporterId);
    if (!title || !fromLocation || !toLocation || !transporterId) {
      return res.status(400).json({ error: "all fields is required" });
    }

    const newjourney = await prisma.journey.create({
      data: {
        title,
        fromLocation,
        toLocation,
        transporterId: Number(transporterId),
        transportername,
      },
    });
    res
      .status(200)
      .json({ msg: "journey added successfully", data: newjourney });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getjourneys = async (req, res) => {
  try {
    const journeys = await prisma.journey.findMany();
    res.status(200).json({ data: journeys });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
export const getjourney = async (req, res) => {
  try {
    const { id } = req.params;
    const journey = await prisma.journey.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!journey) {
      return res.status(404).json({ error: "journey not found" });
    }
    res.status(200).json({ data: journey });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deletejourney = async (req, res) => {
  try {
    const { id } = req.params;
    const journey = await prisma.journey.delete({
      where: {
        id: Number(id),
      },
    });
    if (!journey) {
      return res.status(404).json({ error: "journey not found" });
    }
    res.status(200).json({ msg: "journey deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const updatejourney = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, fromLocation, toLocation, transporterId } = req.body;
    console.log(title, fromLocation, toLocation, transporterId);
    if (!title || !fromLocation || !toLocation || !transporterId) {
      return res.status(400).json({ error: "all fields is required" });
    }

    const journeyT = await prisma.journey.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!journeyT) {
      return res.status(404).json({ error: "journey not found" });
    }

    const journey = await prisma.journey.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        fromLocation,
        toLocation,
        transporterId: Number(transporterId),
      },
    });
    if (!journey) {
      return res.status(404).json({ error: "journey not found" });
    }
    res.status(200).json({ msg: "journey updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const activateJourney = async (req, res) => {
  try {
    const { id } = req.params;
    const journey = await prisma.journey.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "ACTIVE",
      },
    });
    if (!journey) {
      return res.status(404).json({ error: "journey not found" });
    }
    res
      .status(200)
      .json({ msg: "journey activated successfully", data: journey });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const deactivateJourney = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("deactivate", id);
    const journey = await prisma.journey.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "INACTIVE",
      },
    });
    if (!journey) {
      return res.status(404).json({ error: "journey not found" });
    }
    res
      .status(200)
      .json({ msg: "journey deactivated successfully", data: journey });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
