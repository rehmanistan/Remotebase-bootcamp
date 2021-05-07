const express = require("express");
const router = new express.Router();

const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post.js");

const auth = require("../auth/auth");

router.get("/", getPosts);
router.get("/post/:id", getPost);
router.post("/createPost", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
