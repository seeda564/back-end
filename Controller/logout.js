export const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ msg: "User logout seccuessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
};
