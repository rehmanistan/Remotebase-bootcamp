const Post = require("../database/models/post");
const mongoose = require("mongoose");

// retrieve all posts from Mongo
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts) {
      res.json(posts);
    } else {
      res.status(404).json({ error: "No posts found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// retrieve one post from Mongo
const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new post & store in Mongo
const createPost = async (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = new Post({
    title,
    content,
    author: userId,
  });

  try {
    await newPost.save();
    res.status(200).json({ message: "Post created", newPost });
  } catch (error) {
    res.status(500).json(error);
  }
};

// update an existing post in Mongo
const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  try {
    const updatedPost = { _id: id, title, content, author };
    await Post.findByIdAndUpdate(id, updatedPost);
    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete a post from Mongo
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Post.findByIdAndRemove(id);
    res.status(200).send({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getPosts, getPost, createPost, deletePost, updatePost };
