const express = require('express');
const fs = require('fs');
const http = require('http');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.statusCode = 404;
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    })
})


app.listen(port, () => {
    console.log(`listening to request on port: ${port}`);
})