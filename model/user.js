import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    banner: { type: String, required: true },
    pfp: { type: String, required: true },
    at: { type: String, required: true },
    performances: [
        {
            circuit: {
                id: { type: String, required: true },
                name: { type: String, required: true },
                location: { type: String, required: true },
                country: { type: String, required: true },
                city: { type: String, required: true },
                preview: { type: String, required: true },
                outline: { type: String, required: true },
            },
            voitures: [
                {
                    voiture: {
                        id: { type: String, required: true },
                        name: { type: String, required: true },
                        brand: { type: String, required: true },
                        preview: { type: String, required: true },
                        overview: { type: String, required: false },
                    },
                    temps: [{ type: String, required: true }],
                    _id: false,
                },
            ],
            _id: false,
        },
    ],
    objectifs: [
        {
            id: { type: String, required: true },
            circuit: {
                id: { type: String, required: true },
                name: { type: String, required: true },
            },
            voiture: {
                id: { type: String, required: true },
                name: { type: String, required: true },
                preview: { type: String, required: true },
                overview: { type: String, required: false },
            },
            tempsCible: { type: String, required: true, },
            tempsDepart: { type: String, required: true, },
            _id: false,
        },
    ],
});

export const UserModel = mongoose.model("User", UserSchema);