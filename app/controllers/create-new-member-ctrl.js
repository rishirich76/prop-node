var CreateNewMember = require('../mongomodels/User');


module.exports.save = function (req, res) {
    var createNewMember = new CreateNewMember();      // create a new instance of the Bear model

    function randomString() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var length = 8;
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    CreateNewMember.findOne({email : req.body.email}, function (err, docs) {
        if (docs == null){
            var genpassword = randomString();
            var uniqueNumber = new Date().valueOf();

            createNewMember.name = req.body.name;  // set the bears name (comes from the request)
            createNewMember.userid = uniqueNumber;
            createNewMember.email = req.body.email;
            createNewMember.password =  genpassword;
            createNewMember.city = req.body.city;
            createNewMember.state = req.body.state;
            createNewMember.contactnumber = req.body.contactNumber;
            // save the bear and check for errors
            console.log("Before save --> create User");
            createNewMember.save(function (err) {
                if (err){
                    console.log("Error came");
                    res.send(err);
                }else{
                    res.json(
                        {
                            response:{
                                status:{
                                    "success":true,
                                    "responseCode":200,
                                    "errorMessage":""
                                }
                            },
                            body:{
                                userExist:false,
                                message: 'New Member created!'
                            }
                        }
                    );
                    
                    var msgBody = "Your ID has been created successfully. Your Unique ID is "+uniqueNumber+"";
                    console.log(msgBody);
                    
                }
            });
        }else{
            res.json(
                {
                    response:{
                        status:{
                            "success":true,
                            "responseCode":200,
                            "errorMessage":""
                        }
                    },
                    body:{
                        userExist:true,
                        message: 'This mail id is already registered with our database.'
                    }
                }
            );
        }
    });
}