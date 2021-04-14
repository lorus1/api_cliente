'use strict'
const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:false, limit: '50mb'}));




app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
});
module.exports = app