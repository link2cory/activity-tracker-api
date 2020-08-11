import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import activityRouter from "./routes/activityRouter.js";

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/activities", activityRouter);

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
