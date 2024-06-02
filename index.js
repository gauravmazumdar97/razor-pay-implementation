require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const userRoute = require("./src/route");
const Model = require('./src/request').default
// app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }))
app.use(express.json({ extended: true, limit: "500mb" }))



app.use('/user/api/v1', userRoute)




app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})