const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

exports.setupExpress = () => {
  const app = express();

  app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });

  return app;
};
