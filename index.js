import dotenv from "dotenv";
import express from 'express'

import {mongoDBconnection} from './config/db.js';
import {UserRoute} from './routes/userRoute.js';

dotenv.config();
mongoDBconnection();

const  app = express();
app.use(express.json());
app.use('/users',UserRoute);

const port = process.env.PORT || 3000
 app.listen (port)

