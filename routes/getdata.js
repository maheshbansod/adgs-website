var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  connection.query("select * from userdata", function(error, results, fields) {
    if(error) {
      res.json({err: "Database error", name, data});
      throw error;
    }
    var result = results.map((x)=>{ return {name:x.name, data:x.data}});
    res.status(200).json({result: result});
  });
});

module.exports = router;
