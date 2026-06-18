import mongoose from "mongoose";

const leadSchema =
    new mongoose.Schema(
        {
            phoneNumber: {
                type: String,
                required: true,
                unique: true
            },

            loanAmount: {
                type: Number,
                required: true
            },

            name: {
                type: String
            }

        },
        {
            timestamps: true
        }
    );

export const Lead =  mongoose.model(
    "Lead",
    leadSchema
);