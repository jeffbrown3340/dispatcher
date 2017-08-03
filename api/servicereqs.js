var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['servicereqs']);

router.get('/servicereqs', function (req, res) {
    db.servicereqs.find({
        ownerRep: req.query.loggedInRep
    }, function (err, result) {
         if (err) return res.send(err);
         res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to GET servicereqs
 */
router.get('/servicereqs/:id', function (req, res) {
    db.servicereqs.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to POST servicereqs
 */
router.post('/servicereqs', function (req, res) {
    db.servicereqs.insert(req.body, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to PUT servicereqs
 */
router.put('/servicereqs/:id', function (req, res) {
    delete req.body._id;
    db.servicereqs.update(
        { _id: mongojs.ObjectId(req.params.id) },
        req.body,
        function (err, result) {
            if (err) return res.send(err);
            res.json(result);
        });
});

router.put('/servicereqstatus/:id', function (req, res) {
    db.servicereqs.update(
        { _id: mongojs.ObjectId(req.params.id) },
        {$set: {status: 'C'}},
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