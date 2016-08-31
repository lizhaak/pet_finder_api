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

    client.query('INSERT INTO favoritepets (pet_id, pet_name, pet_image_url, pet_description) ' +
                'VALUES ($1, $2, $3, $4)',
                [favoritePet.animal.id, favoritePet.animal.name, favoritePet.animal.imageurl, favoritePet.animal.description],
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

router.get('/count', function(req,res) {
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      res.sendStatus(500);
    }

    client.query("SELECT COUNT(id) as count FROM favoritepets",
                  function(err, result) {
                    done();

                    if (err) {
                      console.log("error: ", err);
                      res.sendStatus(500);
                    }

                    res.send(result.rows[0]);
                  });
  });

});


module.exports = router;
