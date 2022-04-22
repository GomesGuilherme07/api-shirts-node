import shirts from "../models/Shirt.js";

class ShirtController{

    static searchShirts = (req, res) => {
        shirts.find((err, shirts) => {
                res.status(200).json(shirts)
        }) 
    }

    static searchShirtsById = (req, res) => {
        const id = req.params.id;

        shirts.findById(id, (err, shirts) => {
            if(err){
                res.status(404).send({message: `${err.message} - Não localizado o produto de id:${id}`})
            } else {
                res.status(200).json(shirts)
            }
            
        }) 
    }

    static registerShirt = (req, res) => {
        let shirt = new shirts(req.body);

        shirt.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`})
            } else {
                res.status(201).send(shirt.toJSON());
            }
        })
    }

    static updateShirt = (req, res) =>{
        const id = req.params.id;

        shirts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: `Livro de id: ${id} atualizado com sucesso`})
            } else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar`})
            }
        })
    }

    static deleteShirt = (req, res) =>{
        const id = req.params.id;

        shirts.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Livro de id: ${id} removido com sucesso`})
            } else {
                res.status(500).send({message: `${err.message} - Falha ao deletar`})
            }
        })
    }
}

export default ShirtController;