const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/post');

// retrieve posts from Mongo
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ error: 'No posts found' });
    }} catch (error) {
      res.status(500).json(error);
    }
};

// create a new post & store in Mongo
const createPost = async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author: 'ar'
  });
  try {
    await newPost.save();
    res.status(200).send({ message: 'Post created' });
  } catch (error) {
    res.status(500).send(error);
  }
};

// update an existing post in Mongo
const updatePost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { title, content, author}
    );
    res.status(200).send({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete a post from Mongo
const deletePost = async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost }
