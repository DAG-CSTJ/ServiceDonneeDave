import dayjs from 'dayjs';
import express from 'express'; // serveur http déjà fait pour nous
import database from './libs/database.js';
import errors from './middlewares/error.js';

import planetsRoutes from './routes/planets-routes.js';
database();
const app = express();

app.use(express.json());

//TODO : Ajouter du code ici

app.get('/deuxieme',(req,res)=>{
res.status(200)
res.set('Content-Type','text/plain');
res.send('Première route avec express');
})

app.get('/date', (req,res)=>{
    res.status(200);
    res.set('Content-Type', 'text/plain');
    const today = dayjs();
    res.send(today.format());


});


app.get('/matematik/:operation', (req,res)=>{
     
     const a = parseInt(req.query.a,10);
     const b = parseInt(req.query.b,10);

     const operation = req.params.operation;
    let ok = 0;

    switch (operation) {
        case "somme":
            
            ok = a+b;

        break;
    
        case 'différence':

            ok = a-b;
        break;

        case "quotient":

        ok = a*b;
        
        break;

        case "produit":
        ok = a/b;
        break;
        default:
            result='Operation non définie'
    }

  //  const somme = (a+b).toString()
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send(ok.toString());    
})

app.use('/planets', planetsRoutes)

app.use(errors);

export default app;