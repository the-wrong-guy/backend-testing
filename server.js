const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://hola:hola123@cluster0.ixxnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Started"));
