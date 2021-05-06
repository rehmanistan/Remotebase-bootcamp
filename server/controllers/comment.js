const Comment = require("../database/models/comment");
const mongoose = require("mongoose");

// retrieve all comments from Mongo
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    if (comments) {
      res.status(200).json(comments);
    } else {
      res.status(404).json({ error: "No comments found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// retrieve one comment from Mongo
const getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new comment & store in Mongo
const createComment = async (req, res) => {
  const { title, content, userId } = req.body;
  const newComment = new Comment({
    title,
    content,
    author: userId,
  });

  try {
    await newComment.save();
    res.status(200).json({ message: "Comment created", newComment });
  } catch (error) {
    res.status(500).json(error);
  }
};

// update an existing comment in Mongo
const updateComment = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No comment with id: ${id}`);
  try {
    const updatedComment = { _id: id, title, content, author };
    await Comment.findByIdAndUpdate(id, updatedComment);
    res
      .status(200)
      .json({ message: "Comment updated successfully", updatedComment });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete a comment from Mongo
const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No comment with id: ${id}`);

  try {
    await Comment.findByIdAndRemove(id);
    res.status(200).send({ message: "Comment deleted successfully." });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getComments,
  getComment,
  createComment,
  deleteComment,
  updateComment,
};
