var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('loginSuccess', { title: 'Express' });
});
router.post('/', function(req, res, next) {

    if (req.param('username')!=null && req.param('username')!="" && req.param('passwrd')!="" && req.param('passwrd')!=null) {

        if (req.param('username') == "saurav") {
            if (req.param('passwrd') == "kumar") {
                res.render('loginSuccess', {title: 'Express'});
            } else
                res.send("password wrong");
        } else
            res.send("Userid did not match");
    }
    else
        res.send("Username or password is empty");

    //res.render('loginSuccess', { title: 'Express' });
});
module.exports = router;
