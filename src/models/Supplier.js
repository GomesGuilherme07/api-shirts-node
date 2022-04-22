import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        nacionalidade: {type: String, required: true},        
    },
    {
        versionKey: false
    }
);

const suppliers = mongoose.model('suppliers', supplierSchema);

export default suppliers;