var express = require('express');
var router = express.Router();
var connection = require('../database/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('select 1', function(error, results, fields) {
    if (error) throw error;
    res.render('index', { title: JSON.stringify(results)});
  });
});

module.exports = router;
