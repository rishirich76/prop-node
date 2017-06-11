var request = require('request');

module.exports.dashBoardItems = function (req, res) {
    request('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo', 
    	function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    })
}