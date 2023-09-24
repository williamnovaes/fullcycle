const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.connect();

app.get('/', (req, res) => {

    const sql = `INSERT INTO people (name) VALUES('william')`;
    connection.query(sql);
    
    connection.query('SELECT name FROM people', function(err, rows, fields){
        // connection.end();

        if (err) { 
            console.log(err)
            throw err 
        }

        let table = '<ul>';
        for (const element of rows){
            table += `<li>${element.name}</li>`;
        }
        table += '</ul>';
        res.send(`<h1>Full Cycle Rocks!</h1></br>${table}`);
    });
})

app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})