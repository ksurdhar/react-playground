import express from 'express'
import bodyParser = require('body-parser');
const router = express.Router();

router.route('/users')
  .get(function (req, res) {
    Users.forge()
    .fetch()
    .then(function (users) {
      res.json({ error: false, data: users.toJSON() });
    })
    .otherwise(function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })
  .post(function (req, res) {
    User.forge({
      username: req.body.username,
    })
    .save().then(function (user) {
      res.json({ error: false, data: user.toJSON() });
    })
    .otherwise(function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

router.route('/users/:id')
  .get(function (req, res) {
    User.forge({ id: req.params.id })
    .fetch()
    .then(function (user) {
      if (!user) {
        res.status(404).json({ error: true, data: {} });
      }
      else {
        res.json({ error: false, data: user.toJSON() });
      }
    })
    .otherwise(function (err) {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

module.exports = router;
