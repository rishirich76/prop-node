var express = require('express');
var app = express();
// var User = require('../mongomodels/User');


module.exports.login = function(req, res) {
    var resText = "Reached to Node server";
    
    if (checkNullValues(req)) {
        
        res.json({
            resolvedtext : "Request acknowledged"
        });
    }
    else {
        console.log("Request came to Node server , : " + req + "Data :: " + req.data);
        res.json({
            resolvedtext : "Invalid request data"
        }, 500);
    }
    function checkNullValues(val) {
        if (undefined == val || null == val) {
            return true;
        }
        return false;
    }
}