const express = require('express');
const router = new express.Router();

const { getComments, getComment, createComment, deleteComment, updateComment } = require("../controllers/Comment.js");

const auth = require('../auth/auth');

router.get('/', getComments);
router.get('/Comment/:id', getComment);
router.post('/createComment', auth, createComment);
router.patch('/:id', auth, updateComment);
router.delete('/:id', auth, deleteComment);

module.exports = router;


