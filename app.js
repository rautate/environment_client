import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from './etc/config.json';
import * as db from './dbutils/dataBaseUtils';

const app = express();

//bodyParser as middleware
app.use(bodyParser.json());

//Allow requests from any origin
app.use(cors({ origin: '*' }));

//Set connection to db
db.setUpConnection();

//Calculation
//API handlers
app.get('/actual', (req,res) => {
   db.showActual().then(data => res.send(data));
});

app.get('/daily', (req,res) => {
   db.showDaily().then(data => res.send(data));
});

const server = app.listen(serverPort, () =>{
    console.log(`Server is up and running on port ${serverPort}`);
})
