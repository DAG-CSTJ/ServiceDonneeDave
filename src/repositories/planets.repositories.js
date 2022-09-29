import Planet from '../models/planet-model.js'
import dayjs from 'dayjs';
import planetModel from '../models/planet-model.js';

const ZERO_KELVIN = -273.15;

class PlanetsRepository {

    retrieveAll(filter = {}){



        const filterSansWhere = {}
        const testFiltre = {discoverdBy:'Skadex'} // Where discoveredBy = 'Skadex'
        const testFiltre2 = {temperature : {$gt:240}, 'position.y': {$lt:500}} //($lt <) ($gt >) ($lte <=) ($gte >=)
        const testFiltreOr  = {$or : [{temperature: {$gt:240}, 'position.y': {$lt:500} }] } 

        return Planet.find(); // select * from planets
    }

    retrieveOne(idPlanet){
        return Planet.findById(idPlanet) // SELECT * FROM planets WHERE idPlanet = idPlanet
    }

    transform(planet,transformOptions={}){

        if(transformOptions){
            //Changer les unités
            if(transformOptions.unit === 'c'){
                planet.temperature += ZERO_KELVIN;
            }
        }

        planet.discoveryDate=dayjs(planet.discoveryDate).format('YYYY-MM-DD');

        delete planet.createdAt;
        delete planet.updateAt;
        delete planet.__v;

         return planet;
    }

    create(planet){
       return Planet.create(planet); // INSERT() INTO planets VALUES()
    }
    deleteOne(idPlanet){
        return Planet.findByIdAndDelete(idPlanet);
    }
}


export default new PlanetsRepository();