const router = require('express').Router();
const Tracker = require('../models/tracker.js');

router.post('/api/tracker', ({ body }, res) => {
    Tracker.create(body)
    .then(dbTracker => {
        res.json(dbTracker);
    })
});

router.post('/api/tracker/bulk', ({ body }, res) => {
    Tracker.insertMany(body)
    .then(dbTracker => {
        res.json(dbTracker);
    })
});

router.get('/api/tracker/bulk', (req, res) => {
    Tracker.find({})
    .sort({ date: -1 })
    .then(dbTracker => {
        res.json(dbTracker);
    })
});

module.exports = router;