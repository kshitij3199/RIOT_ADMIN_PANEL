// var http = require('http');
// var fs = require('fs');


// var server = http.createServer(function(req,res){
//     console.log('request was made:'+ req.url);
//     res.writeHead(200,{'Content-Type':'application/json'});
//     var myObj = {
//         name : 'kshitij',
//         job : 'unemployed',
//     };
//     res.end(JSON.stringify(myObj));
// });
// server.listen(3000,'localhost');
// console.log('vjnerkj');


var express = require('express');
var app = express();

app.set('view engine','ejs');
const sqlite3 = require('sqlite3').verbose();
var myData = [];

 
// open the database
let db = new sqlite3.Database('../../synapse/homeserver.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the synapse database.');
});
// let sql = `SELECT room_id id,display_name name FROM room_memberships GROUP BY display_name`;
let sql = 'SELECT name as NAME from room_names';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    // console.log(row.NAME);
    myData.push(row);
  });
});


db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


app.get('/adminpanel',function(req,res){
    // myJSON = JSON.stringify(myData);
    res.render('adminpanel',{myData:myData});
    console.log(myData);
});
app.listen(3000);