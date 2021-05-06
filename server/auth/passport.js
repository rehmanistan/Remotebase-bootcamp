const passport = require('passport')
const JwTStrategy = require('passport-jwt').Strategy;
const ExtractJwT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = require('../database/models/user');
const keys = require('./key')

const jwtOptions = {
  jwtFromRequest: ExtractJwT.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};

const strategy = new JwTStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub).then(user => {
    user ? done(null, user) : done(null, false)
  }).catch(err => done(err, false))
});

const jwtStrategy = (passport) => {
  passport.use(strategy);
};

module.exports = jwtStrategy

