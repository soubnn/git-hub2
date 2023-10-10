const express = require('express')
const app = express()
const pg = require('pg')
const cors = require('cors')
const bodyparser = require('body-parser');
const port = 3000


app.use(cors())
app.use(bodyparser.json());


app.post('/', async (req, res) => {


    const client = new pg.Client({
        user: "postgres",
        host: "localhost",
        datbase: "postgres",
        password: "souban",
        port: 5432,
    });
    await client.connect();

    await client.query("insert into todos(id, name) values($1,$2)", values);

    const data = req.body;
    console.log(req.body)

    res.send("saved")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})