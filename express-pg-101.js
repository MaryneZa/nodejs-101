// DOC : https://github.com/postgres-pool/postgres-pool
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
const {Pool} = require('pg')
const express = require('express')
const app = express()
const port = 3500

// const pool_str = new Pool({
//     connectionString: 'postgres://myuser:mypassword@127.0.0.1:5500/mydatabase',
// })

const pool = new Pool({
    host: 'localhost',
    database: 'mydatabase',
    user: 'myuser',
    password: 'mypassword',
    port: 5500
})


app.post("/", async (req, res) => {
    try{
        const result = await pool.query('CREATE TABLE IF NOT EXISTS items (id UUID PRIMARY KEY, name VARCHAR(255))')
        res.json(`Create item TABLE : ${result}`)
    } catch (err){
        console.err("Error to create table ...")
        res.status(500).json("Failed to create table !")
    }
})

app.post("/item", async (req, res) => {
    try {
        const {name} = req.body
        const id = uuid()
        const result = await pool.query('INSERT INTO items (id, name) VALUES ($1, $2) RETURNING *', [
            id,
            name
        ]);
        res.json({"result": result.rows})
    } catch (err) {
        // console.err("Error to create item ...")
        res.status(200).json(`err : ${err}`)
    }
})

// app.post("/")

app.listen(port, () => {
    console.log(`Connected server to port ${port}`)
})