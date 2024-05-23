import Users from "../models/users.js";
import bcrypt from "bcrypt";

export const LoginUser = async (req, res) => {
    console.log(req.body);
    try {
        const check = await Users.findOne({ name: req.body.username });
        console.log("check:", check);
        if (check === null) {
            res.send("the user is not found");
            return;
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            return true;
        } else {
            return res.send("wrong password");
        }
    } catch {
        return res.send("wrong details");
    }
};

export const signupUser = async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };
    const existingUser = await Users.findOne({ name: data.name });

    if (existingUser) {
        res.send("User already exists. Please choose a different username");
        return;
    } else {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashPassword;

        const userdata = await Users.insertMany(data);
        console.log(userdata);
    }
};