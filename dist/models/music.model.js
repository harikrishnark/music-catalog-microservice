"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicDatabase = void 0;
// Simulated Headless CMS / Database data
class MusicDatabase {
    artists = [
        { id: "a1", name: "Daft Punk", genre: "Electronic", monthlyListeners: 15000000 },
        { id: "a2", name: "The Weeknd", genre: "R&B/Pop", monthlyListeners: 85000000 },
        { id: "a3", name: "Fred again..", genre: "Electronic", monthlyListeners: 22000000 }
    ];
    albums = [
        { id: "al1", artistId: "a1", title: "Random Access Memories", releaseYear: 2013, totalTracks: 13 },
        { id: "al2", artistId: "a2", title: "After Hours", releaseYear: 2020, totalTracks: 14 },
        { id: "al3", artistId: "a3", title: "Actual Life 3", releaseYear: 2022, totalTracks: 13 }
    ];
    getAllArtists() {
        return this.artists;
    }
    getArtistById(id) {
        return this.artists.find(a => a.id === id);
    }
    getAlbumsByArtist(artistId) {
        return this.albums.filter(al => al.artistId === artistId);
    }
}
exports.MusicDatabase = MusicDatabase;
