const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


/* GET users listing. */

router.get('/', (req, res, next) => {
    knex('posts')
        .then(posts => {
            //send data to client
            // res.json(posts)
            knex('comments')
                .then(comments => {
                    posts.forEach(post => {
                        post.comments = []
                        comments.forEach(comment => {
                            post.id == comment.posts_id ? post.comments.push(comment) : null;
                        })
                    })
                    // console.log('posts with comments', posts);
                    res.json(posts)
                })
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
    knex('posts')
        .insert(req.body)
        .then((post) => {
            //send data to client
            res.json(post)

        })
})

router.put('/:id', (req, res, next) => {
    knex('posts')
        .where('id', req.params.id)
        .update({
          title: req.body.title,
          author: req.body.author,
          post: req.body.post,
          votes: req.body.votes
        })
        .then((post) => {
            //send data to client
            res.json(post)
        })
})

router.delete('/:id', (req, res, next) => {
        knex('posts')
            .where('id', req.params.id)
            .delete()
            .then(() => {
                //back to bucaneers
                res.json('Post is Deleted!')
            })
    })
    ///posts/post.id/comments
router.get('/onepost/:id', (req, res, next) => {
    knex('comments')
        .where("posts_id", req.params.id)
        .then(comments => {
            console.log(comments);
            //send data to client
            res.json(comments)
        })
});

router.post('/:id', (req, res, next) => {
    // let id = req.params.id
    // console.log("body",req.body);
    knex('comments')
        .insert(req.body)
        .then((comment) => {
            console.log("req.body", req.body);
            //send data to client
            res.json(comment)
        })
})


module.exports = router;
