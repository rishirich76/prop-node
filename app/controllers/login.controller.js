var express = require('express');
var app = express();
var User = require('../mongomodels/User');


module.exports.login = function (req, res) {
    User.findOne({email: req.body.id, password: req.body.password}, function (err, docs) {
        if (docs == null) {
            res.json(
                {
                    success: false,
                    message: "Your ID and/or Password not matching."
                }
            );
        } else {
            console.log(docs);
            res.json(
                {
                    success: true,
                    userid:docs.userid,
                    phone : docs.contactnumber,
                    state : docs.state,
                    city : docs.city,
                    accountCreatedAt : docs.created_at,
                    name:docs.name
                }
            );
        }
    });
}