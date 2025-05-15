const express = require('express');
const {v4: uuid} = require('uuid')
const db = require('./models/index')
const {Item} = db
const app = express()
app.use(express.json())

db.sequelize.authenticate().then(() => {
  console.log('✅ Connected to DB');
  return db.sequelize.authenticate(); // Create tables if not exist
}).then(() => {
  app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');})
}).catch(err => {
    console.error('DB Connection Failed:', err);
  })



app.post("/create", async (req, res) => {
  try {
    const { name } = req.body;
    const id = uuid()
    const item = Item.build({ id: id, name: name });
    await item.save();
    res.status(200).json({"message": "create successfully !"})
  } catch (error) {
    res.status(500).json({"error": error.message})
  }
});

// const item = await Item.create({name: name});

app.get("/items", async (req, res) => {
  try {
    const items = await Item.findAll()
    res.status(200).json({"items": items})
  } catch (error) {
    res.status(500).json({"error": error.message})
  }
})



