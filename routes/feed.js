const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

//getdata
router.get('/read',feedController.getsData);

//getSingleData
router.get('/read/:id',feedController.getData);

//Update Data
router.patch('/update/:id',feedController.updateData);

//Delete
router.delete('/delete/:id',feedController.deleteData);


module.exports = router;