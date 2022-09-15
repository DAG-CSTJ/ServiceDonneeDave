import './load-env.js';

import chalk from "chalk";

import app from './src/apps.js';

const PORT = process.env.PORT;

app.listen(PORT,err => {

    if(err){
        // Nous avons une erreur 
        process.exit(1);
    }

    console.log(chalk.blue(`Server listening on port ${PORT}`));

});

console.log(chalk.bgCyanBright('Online'));