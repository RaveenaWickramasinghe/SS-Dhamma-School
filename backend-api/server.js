import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import databaseconnection from './database/connection';
import routes from './models/routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

//BACKEND_PORT = 9090
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
  console.log('Server is up and running on PORT ${PORT}');
});

app.route('/').get((req, res) =>{
  //To check whether backend is running properly
  res.send("WELCOME TO SAMMA SAMDHI DHAMMA SCHOOL - 2021");
  databaseconnection();
  routes(app);
});