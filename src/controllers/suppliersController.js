import suppliers from "../models/Supplier.js";

class SupplierController{

    static searchSuppliers = (req, res) => {
        suppliers.find((err, suppliers) => {
            res.status(200).json(suppliers)
        }) 
    }

    static searchSupplierById = (req, res) => {
        const id = req.params.id;

        suppliers.findById(id, (err, suppliers) => {
            if(err){
                res.status(404).send({message: `${err.message} - Não localizado o fornecedor de id:${id}`})
            } else {
                res.status(200).json(suppliers)
            }
            
        }) 
    }

    static registerSupplier = (req, res) => {
        let supplier = new suppliers(req.body);

        supplier.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`})
            } else {
                res.status(201).send(supplier.toJSON());
            }
        })
    }

    static updateSupplier = (req, res) =>{
        const id = req.params.id;

        suppliers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: `Fornecedor de id: ${id} atualizado com sucesso`})
            } else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar`})
            }
        })
    }

    static deleteSupplier = (req, res) =>{
        const id = req.params.id;

        suppliers.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Fornecedor de id: ${id} removido com sucesso`})
            } else {
                res.status(500).send({message: `${err.message} - Falha ao deletar`})
            }
        })
    }
}

export default SupplierController;