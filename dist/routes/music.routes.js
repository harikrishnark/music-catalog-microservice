"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const music_controller_1 = require("../controllers/music.controller");
const router = (0, express_1.Router)();
// Routes demonstrating strict separation of concerns (MVC architecture)
router.get('/artists', music_controller_1.musicController.getAllArtists);
router.get('/artists/:id', music_controller_1.musicController.getArtistDetails);
exports.default = router;
