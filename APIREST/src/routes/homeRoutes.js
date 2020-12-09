import dotenv from 'dotenv';

dotenv.config();

import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
