const cluster = require("cluster");
const os = require("os");
const express = require("express");

const numCPUs = os.cpus().length;
// console.log(numCPUs);

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();

  // Configure your Express app
  // ...

  app.get("/", (req, res) => {
    let sum = 0;

    for (let i = 0; i <= 10000000; i++) {
      sum += i;
    }
    res.json({ message: "OK", data: sum });
  });

  const server = app.listen(3000, () => {
    console.log(`Worker process ${process.pid} is listening on port 3000`);
  });
}
