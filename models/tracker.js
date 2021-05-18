const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date, 
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'What type of workout?'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter a name for tracking'
            },
            duration: {
                type: Number,
                required: 'How long?'
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }

    ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

// npm install morgan
// .aggregate method