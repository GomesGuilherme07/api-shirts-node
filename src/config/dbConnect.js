import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guilhermegomes:123@shirtscluster.d26zr.mongodb.net/api-shirts");

let db = mongoose.connection;

export default db;

