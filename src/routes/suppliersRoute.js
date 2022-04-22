import express from "express";
import SupplierController from "../controllers/suppliersController.js";

const router = express.Router();

router
    .get("/suppliers", SupplierController.searchSuppliers)
    .get("/supplier/:id", SupplierController.searchSupplierById)
    .post("/supplier", SupplierController.registerSupplier)
    .put("/supplier/:id", SupplierController.updateSupplier)
    .delete("/supplier/:id", SupplierController.deleteSupplier)

export default router;