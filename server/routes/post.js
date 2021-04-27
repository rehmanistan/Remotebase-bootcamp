/**
 * Post Routes Definitions
 */

const express = require('express');
const router = new express.Router();

const { getPosts, createPost, updatePost, deletePost } = require("../controllers/post.js");

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router

