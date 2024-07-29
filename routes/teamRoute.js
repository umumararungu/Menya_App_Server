import {deleteTeam,createTeam,getTeamById,getTeams,updateTeam} from '../controllers/teamController.js';
import express from 'express';

const teamRouter = express.Router();

teamRouter.post('/createTeam', createTeam);
teamRouter.get('/getTeams', getTeams);
teamRouter.get('/getTeamById/:id', getTeamById);
teamRouter.put('/updateTeam/:id', updateTeam);
teamRouter.delete('/deleteTeam/:id', deleteTeam);

export default teamRouter;