import express from "express";
import bodyParser from "body-parser";

const activityRouter = express.Router();
activityRouter.use(bodyParser.json());

activityRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.write("Will send all the activities matching the query:");
    res.end(`${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    // TODO: validate request body

    // TODO: insert activity into database
    res.write(`received request to add activity object:`);
    res.end(`${JSON.stringify(req.body)}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /activities");
  })
  .delete((req, res) => {
    res.end("Delete operation not supported on /activities");
  });

export default activityRouter;
