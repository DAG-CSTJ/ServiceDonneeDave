import express from 'express';
import  HttpError  from 'http-errors';
import planets from '../data/planets.js';

import PLANETESNOM from '../data/planets.js'; 

import planetsRepositories from '../repositories/planets.repositories.js';

const router = express.Router();

class PlanetsRoutes{
    constructor(){
            router.get('/', this.getAll) // ne pas mettre la route /planetes car déjà mis dans apps.js
            router.get('/:idPlanet',this.getOne); // /planets/:idPlanet
            router.post('/', this.post) // /planets
            router.delete('/:idPlanet',this.deleteOne)
    }

    deleteOne(req,res,next){
        const idPlanet=parseInt(req.params.idPlanet,10);

        const index = PLANETESNOM.findIndex(p => p.id ===idPlanet);
        if(index === -1){
            return next(HttpError.NotFound('planete introuvable frerot'))
        }
        PLANETESNOM.splice(index,1); // Pas oblige de nettre un else parce qu'il y a un return dans le if
        res.status(204).end()
    }

    async getAll(req,res,next){
        // res.status(200);
        // console.log('GET ALL PLANETS');
        // res.json(PLANETESNOM);

        try{
            const planets = await planetsRepositories.retrieveAll();
            console.log(planets);
            res.status(200).json(planets)
        }catch(err){
            return next(err);
        }
        
    }

    // /planets/400
    getOne(req,res,next){

         
        // for(let planet of PLANETESNOM){
        //     if(planet.id === idPlanet){
        //         //Trouver la planète recherché
        //         res.status(200);
        //         res.json(planet);
        //         break;
        //     }
        // }
        // res.status(404);
        // res.end();

        const idPlanet = req.params.idPlanet;
        const planet = PLANETESNOM.filter(p => p.id == idPlanet)
        if(planet.length > 0 ){
            res.status(200);
            res.json(planet[0]);
            
        }
        else{
        return next(HttpError.NotFound('La planète existe pas'));
        }


    }

    post(req,res,next){
        
    }


post(req,res,next){
    const newPlanet = req.body;

    if(newPlanet){

        const index = PLANETESNOM.findIndex((p) => p.id ===req.body.id);
        if(index === -1){
            PLANETESNOM.push(newPlanet);
            res.status(201).json(newPlanet);
        }
       else{
        return next(HttpError.Conflict('Une planète avec un identifiant ${newPlanet.id}'));
       }
    } 
    else{
        return next(HttpError.BadRequest('Aucune information transmise'))
    }
}

}

new PlanetsRoutes();
export default router;