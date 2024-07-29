import Team from "../models/teamModel.js";

export const createTeam = async(req,res)=>{
    try {
        const {cover, name, work} = req.body
        const team = new Team({cover, name, work})
        await team.save()
        res.status(201).json({message: "new member created successfully", data: team, status:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "error of create team new member",error: error.message, status:false })
    }
}

export const getTeams = async(req,res)=>{
    try {
        const teams = await Team.find({})
        res.json({message: "All teams members retrieved successfully", data: teams, status: true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message, status: false})
    }
}

export const getTeamById = async(req,res)=>{
    try {
        const team = await Team.findById(req.params.id)
        if(!team) return res.status(404).json({message: "Team not found", status: false})
        res.json({message: "member retrieved successfully", data: team, status: true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message, status: false})
    }
}

export const updateTeam = async(req,res)=>{
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!team) return res.status(404).json({message: "Team not found", status: false})
        res.json({message: "Team updated successfully", data: team, status: true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message, status: false})
    }
}

export const deleteTeam = async(req,res)=>{
    try {
        const team = await Team.findByIdAndDelete(req.params.id)
        if(!team) return res.status(404).json({message: "Team not found", status: false})
        res.json({message: "Team deleted successfully", status: true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message, status: false})
    }
}