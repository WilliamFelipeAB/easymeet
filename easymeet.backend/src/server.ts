import express, { request, response } from 'express';
import 'dotenv/config';
import './database/connection';
import 'express-async-errors';
import path from 'path';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
app.listen(process.env.PORT || 3333);