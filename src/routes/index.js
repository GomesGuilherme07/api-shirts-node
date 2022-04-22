import express from "express";
import shirts from "./shirtsRoutes.js";
import suppliers from "./suppliersRoute.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Api Shirts"})
    })

    app.use(
        express.json(),
        shirts,
        suppliers
    )
}

export default routes