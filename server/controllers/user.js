import Users from "../models/users.js";
import bcrypt from "bcrypt";

export const LoginUser = async (req, res) => {
  console.log("logging in");
  try {
    const check = await Users.findOne({ name: req.body.username });
    console.log("check:", check);
    if (check === null) {
      return res.status(404).json({ error: "user not found" });
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    if (isPasswordMatch) {
      req.session.userId = check.id;
      res.send(req.session.userId);
    } else {
      return res.status(404).json({ error: "password wrong" });
    }
  } catch {
    return res.status(500).json({ error: "server error" });
  }
};

export const signupUser = async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };
  const existingUser = await Users.findOne({ name: data.name });

  if (existingUser) {
    res.status(400).json({ error: "user already exists" });
    return;
  } else {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashPassword;

    const userdata = await Users.insertMany(data);
    console.log(userdata);
    res.send("ok");
  }
};
export const checkSession = async (req, res) => {
  console.log("checking session");
  try {
    console.log(req.session);
    res.send("ok");
  } catch {}
};
export const displayUsers = async (req, res) => {
  try {
    const users = await Users.find({}, "name _id");
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// await Character.deleteOne({ name: 'Eddard Stark' }); // returns {deletedCount: 1}

export const deleteUser = async (req, res) => {
  try {
    const pickedUser = req.body;
    const delteCount = await Users.deleteOne({ _id: pickedUser._id });
    res.status(200).json("successfully delted");
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
