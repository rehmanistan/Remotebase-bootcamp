// Loading Required Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const passport = require("./auth/passport");
const blogDB = require("./database/db");

// Loading Models
const post = require("./database/models/post");
const user = require("./database/models/user");
const comment = require("./database/models/comment");

// Loading Routes
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");

// App Variables
const app = express();
const port = process.env.PORT || "3000";

// App Configuration
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(postRoutes);
app.use(userRoutes);
// app.use(commentRoutes);

// serve static public assets using Express middleware
// app.use(express.static('public'));

// Passport middleware
// app.use(passport.initialize());

// Use express's default error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
