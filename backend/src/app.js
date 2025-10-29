const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./config/dbConnection");
const authRouter = require("./routes/authRouter");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5174", // Vite default port
  credentials: true
}));
app.use(express.json());
app.use("/api/auth/", authRouter);

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
