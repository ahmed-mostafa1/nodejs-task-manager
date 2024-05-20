const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (res, req) => {
  res.write("Hello to task manager");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
