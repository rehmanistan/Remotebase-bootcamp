const express = require('express');
const router = new express.Router();

const User = require("../database/models/user");
const {signUp, signIn} = require("../controllers/user.js");

router.post('/signIn', signIn);
router.post('/signUp', signUp);
// router.post('/signOut', signOut);
// router.get('/user/:id', getUser);

module.exports = router;


// test user
// {
//     "newUser": {
//         "_id": "608ae8003092480dbbd0c506",
//         "email": "testEmail1",
//         "password": "$2b$12$p3KJiqWhuyQHx1Mdg2rffOt5GsDDn4bsfJ6f.KCLMuXKRESNf3uqC",
//         "dateCreated": "2021-04-29T17:08:16.383Z",
//         "__v": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RFbWFpbDEiLCJpZCI6IjYwOGFlODAwMzA5MjQ4MGRiYmQwYzUwNiIsImlhdCI6MTYxOTcxNjA5NiwiZXhwIjoxNjE5NzE5Njk2fQ.Bkec0s1bBA4szEjGcFzo7HJ0XbaUXqKa9pRvy6caEWk"
// }


