import {Router} from 'express'

import EventoController from './controllers/EventoController'

import uploadConfig from './config/upload';
import Multer from 'multer';

const routes = Router();
const upload = Multer(uploadConfig);

routes.post('/eventos', upload.array('images'), EventoController.create);
routes.get('/eventos', EventoController.index);
routes.get('/eventos/:id', EventoController.show);

export default routes;