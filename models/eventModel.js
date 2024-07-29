import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default:Date.now(),
    },
    location: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
