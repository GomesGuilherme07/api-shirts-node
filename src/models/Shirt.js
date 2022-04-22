import mongoose from "mongoose";

const shirtSchema = new mongoose.Schema(
    {
        id: {type: String},
        produto: {type: String, required: true},
        tamanhoDisponivel: {type: String, required: true},
        fornecedor: {type: mongoose.Schema.Types.ObjectId, ref: 'suppliers', required: false},
        quantidade: {type: Number, required: true},
        valorVenda: {type: Number, required: true},
        valorCusto: {type: Number, required: true},
    }
);
//
const shirts = mongoose.model('shirts', shirtSchema);

export default shirts;