const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


/* GET users listing. */
router.get('/', (req, res, next) => {
    knex('posts')
        .then(posts => {
            //send data to client
            res.json(posts)
        })
});

router.get('/:id', function(req, res) {
    knex('posts')
        .where('id', req.params.id)
        .first()
        .then(function(post) {
            res.send(post);
        })
});
router.post('/', (req, res, next) => {
  console.log("post:",req.body);
    knex('posts')
        .insert(req.body)
        .then((post) => {
            //send data to client
            res.json(post)
        })
})
module.exports = router;
