const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/Pin");
const port = 8800;

const app = express();

dotenv.config();

app.use(express.json());

/* Database connection Starts */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected!!");
  })
  .catch((err) => {
    console.log(err);
  });
/* Database connection Ends */

app.use("/api/pins", pinRoute);

/* Server connecting to port */
app.listen(port, () => {
  console.log("Server is running...");
});
