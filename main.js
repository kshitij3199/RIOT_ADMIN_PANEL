// const sqlite3 = require('sqlite3').verbose();
// var myData = [];

 
// // open the database
// let db = new sqlite3.Database('../../synapse/homeserver.db', sqlite3.OPEN_READONLY, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the synapse database.');
// });
// // let sql = `SELECT room_id id,display_name name FROM room_memberships GROUP BY display_name`;
// let sql = 'SELECT name as NAME from room_names';

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     // console.log(row.NAME);
//     myData.push(row);
//   });
// });


// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
// var http = require('http');
// var fs = require('fs');


// var server = http.createServer(function(req,res){
//     console.log('request was made:'+ req.url);
//     res.writeHead(200,{'Content-Type':'application/json'});
//     // var myObj = {
//     //     name : 'kshitij',
//     //     job : 'unemployed',
//     // };
//     myJSON = JSON.stringify(myData);
//     document.getElementById("demo").innerHTML = myJSON;
//     res.end(myJSON);
// });
// server.listen(3000,'localhost');
// console.log('vjnerkj');



var express = require('express');
var app = express();

app.set('view engine','ejs');


// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
var myData = [];
var myData2 = [];

    const sqlite3 = require('sqlite3').verbose();


    let db = new sqlite3.Database('../../synapse/homeserver.db', sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the synapse database.');
    });
    let sql = 'SELECT name as NAME , room_id as id from room_names';
let sql2 = 'SELECT room_id as id2, membership as m2, display_name as name2 from room_memberships';
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
   myData = [];
  myData2 = [];
  rows.forEach((row) => {
    // console.log(row.NAME);
    myData.push(row);
  });
});

db.all(sql2, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    // console.log(row.NAME);
    myData2.push(row);
    console.log(row);
  });
});
app.get('/adminpanel',function(req,res){
    // myJSON = JSON.stringify(myData)
    
    

   
// open the database

// let sql = `SELECT room_id id,display_name name FROM room_memberships GROUP BY display_name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
   myData = [];
  myData2 = [];
  rows.forEach((row) => {
    // console.log(row.NAME);
    myData.push(row);
  });
});

db.all(sql2, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    // console.log(row.NAME);
    myData2.push(row);
    console.log(row);
  });
});
  res.render('adminpanel',{myData:myData,myData2:myData2});
    console.log(myData);
    console.log("kshitij");
});

app.get('/adminlogin',function(req,res){
  res.render('adminlogin');

});


app.listen(3000);