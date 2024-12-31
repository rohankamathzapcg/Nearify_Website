const express = require("express");

const sequelize = require("./config/connection");
const pinRoute=require("./routes/PinRoutes")

const port = 8800;

const app = express();
app.use(express.json());

/* Database connection Starts */
async function DatabaseConnection() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Databases synchronized and Connected successully!");
  } catch (err) {
    console.error("Error synchronizing the database:", err);
  }
}
DatabaseConnection();
/* Database connection Ends */

app.use("/api/pins", pinRoute);

/* Server connecting to port */
app.listen(port, () => {
  console.log("Server is running...");
});