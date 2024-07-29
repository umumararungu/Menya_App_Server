import mongoose from "mongoose";
// import courseModel from "./courseModel.js";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        require:true
    },
    // courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courseModel' }]
});
const userModel = mongoose.model("user", userSchema);
export default userModel;