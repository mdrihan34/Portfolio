const express = require('express');

const cors = require('cors');



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"], 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true 
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

let messageCollection, projectCollection, resumeCollection;

async function connectDB() {
  try {
    client.connect();
    console.log("✅ Successfully connected to MongoDB!");
    const db = client.db('portfolio');
    messageCollection = db.collection('message');
    projectCollection = db.collection('project');
    resumeCollection = db.collection('resume');
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

connectDB();

// API Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/project', async (req, res) => {
  const result = await projectCollection.insertOne(req.body);
  res.send(result);
});

app.get('/project', async (req, res) => {
  const result = await projectCollection.find().toArray();
  res.send(result);
});

app.put('/project/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = { $set: req.body };
  const result = await projectCollection.updateOne(filter, updateDoc);
  res.send(result);
});

app.delete('/project/:id', async (req, res) => {
  const id = req.params.id;
  const result = await projectCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});

// Resume Routes
app.post('/resume', async (req, res) => {
  const result = await resumeCollection.insertOne(req.body);
  res.send(result);
});

app.get('/resume', async (req, res) => {
  const result = await resumeCollection.find().toArray();
  res.send(result);
});

app.put('/resume/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = { $set: req.body };
  const result = await resumeCollection.updateOne(filter, updateDoc);
  res.send(result);
});

app.delete('/resume/:id', async (req, res) => {
  const id = req.params.id;
  const result = await resumeCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});

// Message Routes
app.post('/message', async (req, res) => {
  const result = await messageCollection.insertOne(req.body);
  res.send(result);
});

app.get('/messages', async (req, res) => {
  const result = await messageCollection.find().toArray();
  res.send(result);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})