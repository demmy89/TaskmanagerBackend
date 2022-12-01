const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose");
require("dotenv").config();
const taskRouter = require("./routers/taskroutes");
const routeNotFound = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler")
const cors = require('cors')

// to set up structure

// schema
// title - string,required,unique, minlegth
// description - string, required
// completed - boolean, default- false
// timestamps

// midddleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tasks", taskRouter);
app.use(routeNotFound);
app.use(errorHandler)

mongoose
  .connect(process.env.MONG0_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}...and DB connected`);
    });
  })
  .catch((err) => console.log(err)); 
