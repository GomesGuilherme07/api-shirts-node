import express from "express";
import ShirtController from "../controllers/shirtsController.js";

const router = express.Router();

router
    .get("/shirts", ShirtController.searchShirts)
    .get("/shirts/:id", ShirtController.searchShirtsById)
    .post("/shirts", ShirtController.registerShirt)
    .put("/shirts/:id", ShirtController.updateShirt)
    .delete("/shirts/:id", ShirtController.deleteShirt)

export default router;