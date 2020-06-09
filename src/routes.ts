import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const pointController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointController.show);
routes.get('/points', pointController.index);
routes.post('/points', pointController.create);

export default routes;