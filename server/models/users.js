import mongoose from "mongoose"




const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

const Users = new mongoose.model("Users", UsersSchema);
export default Users;