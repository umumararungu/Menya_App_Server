import mongoose from 'mongoose';

const teamModel = mongoose.Schema({
    cover:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true 
    },
    work:{
        type: String,
        required: true
    }
});

const Team = mongoose.model('Team', teamModel);
export default Team;