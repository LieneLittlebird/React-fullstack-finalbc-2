const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const MONGO_DB_PORT = 27017;
const MONGO_DB_API = `mongodb://localhost:${MONGO_DB_PORT}`;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/addPost", async (req, res) => {
  const client = await MongoClient.connect(MONGO_DB_API, {
    useUnifiedTopology: true,
  });
  const db = client.db("discussion_save");
  const postsCollection = db.collection("posts");
  await postsCollection.insertOne(req.body);

  client.close();

  res.send("Post added successfully");
});

app.post("/addForm", async (req, res) => {
  const client = await MongoClient.connect(MONGO_DB_API, {
    useUnifiedTopology: true,
  });
  const db = client.db("form_save");
  const postsCollection = db.collection("forms");
  await postsCollection.insertOne(req.body);

  client.close();

  res.send("Form data added successfully");
});

app.get("/getPosts", async (req, res) => {
  const client = await MongoClient.connect(MONGO_DB_API, {
    useUnifiedTopology: true,
  });
  const db = client.db("discussion_save");
  const postsCollection = db.collection("posts");
  postsCollection.find({}).toArray((err, docs) => {
    client.close();
    res.send(docs);
  });
});

const port = 8080;
app.listen(port);
