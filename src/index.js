const express = require('express')
const app = express()
 
//settings
app.use(express.static('public'));


//middlerwors
app.use('/tree', express.static(__dirname + '/public/tree'));
app.use('/', express.static(__dirname + '/public/home'));
 
//server initilizacion
app.listen(7000)