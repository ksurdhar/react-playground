import express from 'express';
import { Subnote, Subnotes } from './models.js'
const router = express.Router();

router.route('/subnotes')
  .get((req, res) => {
    Subnotes.forge()
    .fetch()
    .then((subnotes) => {
      res.json({ subnotes: subnotes.toJSON() });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })
  .post((req, res) => {
    Subnote.forge({
      content: req.body.content,
    })
    .save().then((subnote) => {
      res.json({ error: false, data: subnote.toJSON() });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

router.route('/subnotes/:id')
  .get((req, res) => {
    Subnote.forge({ id: req.params.id })
    .fetch()
    .then((subnote) => {
      if (!subnote) {
        res.status(404).json({ error: true, data: {} });
      }
      else {
        res.json({ error: false, data: subnote.toJSON() });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

module.exports = router;
