import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);