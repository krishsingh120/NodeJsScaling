const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.listen(3001, () => {
  console.log(`Server is listening on port http://localhost:${3001}`);
});

