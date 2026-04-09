import { Router } from 'express';
import { musicController } from '../controllers/music.controller';

const router = Router();

// Routes demonstrating strict separation of concerns (MVC architecture)
router.get('/artists', musicController.getAllArtists);
router.get('/artists/:id', musicController.getArtistDetails);

export default router;
