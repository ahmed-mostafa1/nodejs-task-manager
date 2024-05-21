const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://ahmedcodedev:1234@nodejs.bmrr400.mongodb.net/?retryWrites=true&w=majority&appName=nodejs";
const connectDB = (url) => {
  mongoose.connect(connectionString);
};

module.exports = connectDB;
