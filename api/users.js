var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['users']);

router.get('/users', function (req, res) {
    db.users.find({
        acctNum: req.query.ownerRep
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to GET users
 */
router.get('/users/:id', function (req, res) {
    db.users.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to POST users
 */
router.post('/users', function (req, res) {
    db.users.insert(req.body, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to PUT users
 */
router.put('/users/:id', function (req, res) {
    delete req.body._id;
    db.users.update(
        { _id: mongojs.ObjectId(req.params.id) },
        req.body,
        function (err, result) {
            if (err) return res.send(err);
            res.json(result);
        });
});

/**
 * Other routes
 * ...
 * ...
 * ...
 */

module.exports = router;