import express from 'express'; // serveur http déjà fait pour nous

const app = express();

//TODO : Ajouter du code ici

app.get('/premiere',(req,res)=>{
res.status(200)
res.set('Content-Type','text/plain');
res.send('Première route avec express');
})

export default app;