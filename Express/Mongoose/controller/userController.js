const userSchema = require("../models/userSchema")

const createUser = async(req,res) => {
    try {
        const response = await userSchema.create(req.body);
        res.status(200).json({
            isError: false,
            message: "User created successfully",
            data: req.body,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User creation failed",
            error: null,
        });
    }
}

const getUser = async(req,res) => {
    try {
        const response = await userSchema.find();
        res.status(200).json({
            isError: false,
            message: "User fetched successfully",
            data: req.body,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User fetching failed",
            error: null,
        });
    }
}

const updateUser = async(req,res) => {
    try {
        const response = await userSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            isError: false,
            message: "User updated successfully",
            data: req.body,
        });
    }
    catch (error) {
        res.status(500).json({
            isError: true,
            message: "User update failed",
            error: null,
        });
    }
}

const deleteUser = async(req,res) => {
    try {
        const response = await userSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            isError: false,
            message: "User deleted successfully",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User deletion failed",
            error: null,
        });
    }
}

module.exports = {createUser, getUser, updateUser, deleteUser};
