const router = require('express').Router();
const Tracker = require('../models/tracker.js');

router.get('/api/workouts/range', (req, res) => {
    Tracker.aggregate([
        {$addFields: {
            totalDuration:{
                $sum: '$exercises.duration'
            }
        }}
    ]).sort({_id: -1}).limit(7)
    .then(dbTracker => {
        res.json(dbTracker);
    })
    .catch(err => res.status(500).json(err))
});

router.get('/api/workouts', (req, res) => {
    Tracker.aggregate([
        {$addFields: {
            totalDuration:{
                $sum: '$exercises.duration'
            }
        }}
    ])
    .then(dbTracker => {
        res.json(dbTracker);
    })
    .catch(err => res.status(500).json(err))
})

router.post('/api/workouts', (req, res) => {
    Tracker.create({})
    .then(dbTracker => {
        res.json(dbTracker);
    })
    .catch(err => res.status(500).json(err))
});

router.put('/api/workouts/:id', (req, res) => {
    Tracker.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new: true, runValidators: true})
    .then(dbTracker => {
        res.json(dbTracker);
    })
    .catch(err => res.status(500).json(err))
});

module.exports = router;