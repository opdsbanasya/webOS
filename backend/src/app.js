const express = require("express");
require("dotenv").config();
const { connectToDatabase } = require("./config/dbConnection");
const authRouter = require("./routes/authRouter");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", authRouter);

connectToDatabase()
  .then(() => {
    console.log("Connection established 🟢 ");
    app.listen(port, () => {
      console.log(`Server is running on port ${port} 👍`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
