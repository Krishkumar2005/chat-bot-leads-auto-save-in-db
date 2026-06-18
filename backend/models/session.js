import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        unique: true
    },

    state: {
        phoneNumber: String,
        loanAmount: Number,
        name: String,

        nameAsked: {
            type: Boolean,
            default: false
        },

        nameSkipped: {
            type: Boolean,
            default: false
        },

        leadSaved: {
            type: Boolean,
            default: false
        }
    }
});

export const Session = mongoose.model(
    "Session",
    sessionSchema
);