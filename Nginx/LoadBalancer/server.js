const express = require("express");
const app = express();

const PORT = process.argv[2] || 4000;

app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }

  res.json({
    message: "OK",
    port: PORT,
    data: sum,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
