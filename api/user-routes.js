import express from 'express';
import { User, Users } from './models.js'
const router = express.Router();

router.route('/users')
  .get((req, res) => {
    Users.forge()
    .fetch()
    .then((users) => {
      console.log('==================');
      console.log('USERS:', users);
      console.log('==================');
      res.json({ error: false, data: users.toJSON() });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })
  .post((req, res) => {
    User.forge({
      username: req.body.username,
    })
    .save().then((user) => {
      res.json({ error: false, data: user.toJSON() });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

router.route('/users/:id')
  .get((req, res) => {
    User.forge({ id: req.params.id })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: true, data: {} });
      }
      else {
        res.json({ error: false, data: user.toJSON() });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

module.exports = router;
