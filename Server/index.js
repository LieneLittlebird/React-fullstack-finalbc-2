import express from "express";

const app = express();

app.get("/posts", (req, res) => {
  res.send("Hello nord");
});

app.listen(3004);
