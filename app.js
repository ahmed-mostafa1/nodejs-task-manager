const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connectionString");

// middleware
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    // Start server
    app.listen(3000, () =>
      console.log(`Example app listening on port 3000 ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
