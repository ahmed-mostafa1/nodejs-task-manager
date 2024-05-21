const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connectionString");
require("dotenv").config();
// middleware
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    // Start server
    app.listen(3000, () =>
      console.log(`Example app listening on port 3000 ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
