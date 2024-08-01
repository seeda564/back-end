import prisma from "../../prisma/Client.js";
import bcrypt from "bcrypt";
export const changePassword = async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;
    console.log(password, newPassword);
    console.log(email, password, newPassword);
    if (!password || !newPassword) {
      return res.status(501).json({ error: "All fields are required" });
    }

    if (password === newPassword) {
      return res.status(501).json({ error: "password not changed" });
    }
    const user = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(501).json({ error: "Invalid Credentials no user" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(501).json({ error: "Invalid Credentials no match" });
    }
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    const updatedUser = await prisma.admin.update({
      where: {
        email: email,
      },
      data: {
        password: hashedPassword,
      },
    });

    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(501).json({ error: "Invalid Credentials fef" });
    }
    return res
      .status(201) //created
      .json({ msg: "Password updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const changeEmail = async (req, res) => {
  try {
    const { email, newEmail } = req.body;

    if (!email || !newEmail) {
      return res.status(501).json({ error: "All fields are required" });
    }
    if (email === newEmail) {
      return res.status(501).json({ error: "email not changed" });
    }
    const user = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }
    const updatedUser = await prisma.admin.update({
      where: {
        email: email,
      },
      data: {
        email: newEmail,
      },
    });
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(501).json({ error: "Invalid Credentials" });
    }
    return res
      .status(201) //created
      .json({ msg: "Email updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const changeUserName = async (req, res) => {
  try {
    const { email, username, newUsername } = req.body;

    if (!username || !newUsername) {
      return res.status(501).json({ err: "All fields are required" });
    } else if (username === newUsername) {
      return res.status(501).json({ err: "username not changed" });
    }
    const user = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    if (user.username !== username) {
      return res.status(501).json({ err: "Invalid Credentials" });
    }
    const updatedUser = await prisma.admin.update({
      where: {
        email: email,
      },
      data: {
        username: newUsername,
      },
    });
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(501).json({ err: "Invalid Credentials" });
    } else {
      return res
        .status(201) //created
        .json({ msg: "username updated successfully", data: updatedUser });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const changeContact = async (req, res) => {
  try {
    const { companyName, address, phone, zipcode } = req.body;
    try {
      if (!companyName || !address || !phone || !zipcode) {
        return res.status(501).json({ error: "All fields are required" });
      }
      const company = await prisma.company.findMany();
      console.log(company);
      const id = company[0].id;
      const updatedcompany = await prisma.company.update({
        where: {
          id,
        },
        data: {
          companyName: companyName,
          address: address,
          phone: phone,
          zipcode: zipcode,
        },
      });
      console.log(updatedcompany);
      if (!updatedcompany) {
        return res.status(501).json({ error: "Invalid Credentials" });
      } else {
        return res
          .status(201) //created
          .json({ msg: "contact updated successfully", data: updatedcompany });
      }
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};

export const getCompany = async (req, res) => {
  try {
    const company = await prisma.company.findMany();
    res.status(200).json({ data: company[0] });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
