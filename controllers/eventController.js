import Event from '../models/eventModel.js';

// Create Event
export const createEvent = async (req, res) => {
    try {
        const { title, description, date, location, organizer } = req.body;
        const event = new Event({ title, description, date, location, organizer });
        await event.save();
        res.status(201).json({ message: 'Event created successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Get All Events
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({ events });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving events', error });
    }
};

// Get Single Event

export const getEventById = async(req,res)=>{
    const {id} = req.params
    try {
        const event = await Event.findById(id);
        if(!event){
            return res.status(404).json({message: "Course not found", status: false})
        }
        res.json({message: "event retrieved successfully", status: true, data: event})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", status: false, error:error})
    }
}

// Update Event
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event updated successfully updated', event });
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
};

// Delete Event
export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
};
