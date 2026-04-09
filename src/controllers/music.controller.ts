import { Request, Response } from 'express';
import { MusicDatabase } from '../models/music.model';

const db = new MusicDatabase();

export const musicController = {
  // API Controller endpoint: Fetch all artists
  getAllArtists: (req: Request, res: Response) => {
    try {
      const artists = db.getAllArtists();
      res.status(200).json({
        success: true,
        data: artists
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server Error occurred while fetching artists' });
    }
  },

  // API Controller endpoint: Fetch specific artist details with their catalog
  getArtistDetails: (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
      const artist = db.getArtistById(id);
      if (!artist) {
        return res.status(404).json({ success: false, message: 'Artist not found in catalog' });
      }

      const albums = db.getAlbumsByArtist(id);
      
      res.status(200).json({
        success: true,
        data: {
          ...artist,
          catalog: albums
        }
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server Error occurred' });
    }
  }
};
