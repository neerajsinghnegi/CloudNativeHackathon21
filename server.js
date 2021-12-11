'use strict';
const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

//app 
const app = express();
app.get('/', (req, res)=>{
    res.send('Hello World v1');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});