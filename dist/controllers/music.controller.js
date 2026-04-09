"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicController = void 0;
const music_model_1 = require("../models/music.model");
const db = new music_model_1.MusicDatabase();
exports.musicController = {
    // API Controller endpoint: Fetch all artists
    getAllArtists: (req, res) => {
        try {
            const artists = db.getAllArtists();
            res.status(200).json({
                success: true,
                data: artists
            });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Server Error occurred while fetching artists' });
        }
    },
    // API Controller endpoint: Fetch specific artist details with their catalog
    getArtistDetails: (req, res) => {
        const id = req.params.id;
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
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Server Error occurred' });
        }
    }
};
