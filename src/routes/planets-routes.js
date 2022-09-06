import express from 'express';

import PLANETESNOM from '../data/planets.js'; 
const router = express.Router();

class PlanetsRoutes{
    constructor(){
            router.get('/', this.getAll) // ne pas mettre la route /planetes car déjà mis dans apps.js
            router.get('/:idPlanet',this.getOne); // /planets/:idPlanet
            router.post('/', this.post) // /planets
    }

    getAll(req,res,next){
        res.status(200);
        console.log('GET ALL PLANETS');
        res.json(PLANETS);
    }

    getOne(req,res,next){

    }

    post(req,res,next){
        
    }
}

new PlanetsRoutes();
export default router;