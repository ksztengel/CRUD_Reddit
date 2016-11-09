const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt')


router.post('/signup', function(req, res, next) {
    knex('users')
        .where('username', req.body.username)
        .then(function(results) {
            if (results.length >= 1) {
                console.log('User already exists!');
                const error = {
                    userExists: "User already exists"
                }
                res.json(error)
            } else {
                let hash = bcrypt.hashSync(req.body.password, 12)
                knex('users')
                    .insert({
                        email: req.body.email,
                        username: req.body.username,
                        hashed_password: hash
                    })
                    .returning('*')
                    .then(function(results) {
                        res.json(results[0])
                    })
            }
        })
})

router.post('/login', function(req, res, next) {
    console.log("form", req.body);
    knex('users')
        .where('username', req.body.username)
        .then(function(results) {
            console.log("results", results);
            if (results.length < 1) {
                console.log('Not authorized');
            } else {
                let isValid = bcrypt.compareSync(req.body.password, results[0].hashed_password)
                if (isValid) {
                    res.json(results);
                } else {
                    console.log('wrong password');
                    const error = "Username or password is wrong."
                }
            }
        })
})


module.exports = router;
