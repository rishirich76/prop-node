var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
//var mongoose = require('mongoose');
//var config = require('./app/config/config');


//ALL CONTROLLERS=================================================================
var loginCtrl = require('./app/controllers/login.controller');
var aaCtrl = require('./app/controllers/aa.controller');
//================================================================================

//mongoose.connect(config.database);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


var port = process.env.PORT || 8080;
var router = express.Router();
//===============================API HIT HERE=============================
router.post('/login', loginCtrl.login);
router.post('/speechtext', aaCtrl.login);

//========================================================================

app.use('/prop', router);
app.listen(port);
console.log('Server started on port ' + port);