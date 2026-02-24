const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ✅ CORS MUST BE FIRST
app.use(cors({
  origin: "https://login-page-wheat-three.vercel.app",
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});