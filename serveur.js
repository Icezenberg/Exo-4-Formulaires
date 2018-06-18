var express = require('express');
var bodyParser = require("body-parser");
var server = express();

// utiliser le module de parsing
server.use(bodyParser.urlencoded({ extended: true }));


/**
 * Route statique vers dossier public
 */
server.use(express.static('public'));
/**
 * Port d'écoute
 */
server.listen(9000, function() { console.log("Listening on port 9000")});


/**
 * Route vers index.html
 */
server.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
    
});

/**
 * Route vers les données du formulaire
 */
server.post('/post.html', function(req, res) {
    // exécuté lorsqu'est appelé post.html
    var val1 = parseInt(req.body.champ1);
    var val2 = parseInt(req.body.champ2);
    var somme = (parseInt(req.body.champ1)+parseInt(req.body.champ2)+"");
    // console.log(val1,val2);
    console.log(somme)
    // res.writeHead(200);
    // res.write(val1+val2);
    res.send(val1 + val2 + "")
    // res.write(parseInt(val1)+parseInt(val2));
    // res.end();
  });


  

//   app.get('/etage/1/chambre', function(req, res) {

//     res.setHeader('Content-Type', 'text/plain');

//     res.send('Hé ho, c\'est privé ici !');

// });