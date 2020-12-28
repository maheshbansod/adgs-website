var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.post('/', function(req, res, next) {
  var {name, data} = req.body;
  connection.query("insert into userdata set ?", {name, data}, function(error, results, fields) {
    if(error) {
      res.json({err: "Database error", name, data});
      throw error;
    }
    res.json({result: {name, data}});
  });
});

module.exports = router;
