import chalk from "chalk";

import app from './src/apps.js';

const PORT = 4200;

app.listen(PORT,err => {

    if(err){
        // Nous avons une erreur 
        process.exit(1);
    }

    console.log(chalk.blue('Server listening on port ${PORT}'));

});

console.log(chalk.bgCyanBright('Hello', 'World!'));