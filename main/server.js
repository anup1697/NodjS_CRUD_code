const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

app.use(express.json());

app.get("/first", (req, res) => {
  res.send("get the api");
});
PORT = 5000;
urs = process.env.raj;
console.log(urs);
mongoose
  .connect(process.env.urlmngo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("connected with db");
  })
  .catch((e) => {
    console.log("Error in db connect", e);
  });
app.use(require("./routes/useraRoute"));
// app.use(require(""));
app.listen(PORT, () => {
  console.log(`app is listening port:http://localhost:${process.env.PORT}`);
});
