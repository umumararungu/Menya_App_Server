import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Register User
export const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        } else {
            const saltRounds = 10;
            const encrypted = bcrypt.hashSync(password, saltRounds);
            const toSave = {
                name,
                email,
                password: encrypted,
                role: role || "student",
            };
            const user = await userModel.create(toSave);
            
            // Generate token after registration
            const secret = process.env.JWT_SECRET || "defaultSecret";
            const token = jwt.sign({ id: user._id }, secret); // Token expiration set to 1 hour
            
            res.status(201).json({ 
                message: "User successfully created", 
                user, 
                token, // Include token in response
                success: true 
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

// Login User
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            const validate = await bcrypt.compare(password, exist.password);
            if (validate) {
                const secret = process.env.JWT_SECRET || "defaultSecret"; // Use environment variable
                const token = jwt.sign({ id: exist._id }, secret); // Token expiration set to 1 hour
                res.status(200).json({ 
                    message: 'Login successful', 
                    token 
                });
            } else {
                res.status(400).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in", error });
    }
};
