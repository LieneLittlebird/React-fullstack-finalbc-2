import express from "express";
import cors from "cors";
import axios from "axios";
import { JS_PLACEHOLDER_API } from "../src/constants.js";

// import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/addPost", async (req, res) => {
  const { userName, userMessage, createdAt } = req.body;

  const data = {
    userName,
    userMessage,
    createdAt,
  };

  await axios({
    method: "post",
    url: `${JS_PLACEHOLDER_API}/posts`,
    headers: {
      "content-type": "application/json",
    },
    data,
  });

  res.send("Post added successfully");
});

app.get("/getPosts", async (req, res) => {
  const response = await axios({
    method: "get",
    url: `${JS_PLACEHOLDER_API}/posts`,
  });

  res.send(response.data);
});

const port = process.env.PORT || 8080;
app.listen(port);
