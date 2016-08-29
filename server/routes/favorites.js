var express = require("express");
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/petFinder';

router.post('/', function(req, res) {
  var favoritePet = req.body;
  console.log('favoritePet: ', favoritePet);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO favoritepets (id, name, imageurl, description) ' +
                'VALUES ($1, $2, $3, $4)',
                [favoritePet.id, favoritePet.name, favoritePet.imageurl, favoritePet.description],
                function(err, result) {
                  done();

                  if (err) {
                    res.sendStatus(500);
                  } else {
                    res.sendStatus(201);
                  }
                });
  });
});

router.get('/', function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    client.query("SELECT * FROM favoritepets",
                  function(err, result) {
                    done();

                    if (err) {
                      console.log("error: ", err);
                      res.sendStatus(500);
                    }

                    res.send(result.rows);
                  });
  });
});

module.exports = router;
