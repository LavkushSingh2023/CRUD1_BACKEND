const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes')
const path = require("path")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use('/api/users/', userRoutes)

mongoose.connect("mongodb://localhost:27017/crudDB");

app.listen(5000, () => console.log("Server running on port 5000"));
