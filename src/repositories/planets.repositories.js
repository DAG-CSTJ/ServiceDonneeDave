import Planet from '../models/planet-model.js'
import dayjs from 'dayjs';

class PlanetsRepository {

    retrieveAll(){
        return Planet.find(); // select * from planets
    }

    retrieveOne(idPlanet){
        return Planet.findById(idPlanet) // SELECT * FROM planets WHERE idPlanet = idPlanet
    }

    transform(planet){

        planet.discoveryDate=dayjs(planet.discoveryDate).format('YYYY-MM-DD');

        delete planet.createdAt;
        delete planet.updateAt;
        delete planet.__v;

         return planet;
    }

    create(planet){
       return Planet.create(planet); // INSERT() INTO planets VALUES()
    }
}


export default new PlanetsRepository();