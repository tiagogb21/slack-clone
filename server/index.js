const express = require("express");

var cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
