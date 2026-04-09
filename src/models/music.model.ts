export interface Artist {
  id: string;
  name: string;
  genre: string;
  monthlyListeners: number;
}

export interface Album {
  id: string;
  artistId: string;
  title: string;
  releaseYear: number;
  totalTracks: number;
}

// Simulated Headless CMS / Database data
export class MusicDatabase {
  private artists: Artist[] = [
    { id: "a1", name: "Daft Punk", genre: "Electronic", monthlyListeners: 15000000 },
    { id: "a2", name: "The Weeknd", genre: "R&B/Pop", monthlyListeners: 85000000 },
    { id: "a3", name: "Fred again..", genre: "Electronic", monthlyListeners: 22000000 }
  ];

  private albums: Album[] = [
    { id: "al1", artistId: "a1", title: "Random Access Memories", releaseYear: 2013, totalTracks: 13 },
    { id: "al2", artistId: "a2", title: "After Hours", releaseYear: 2020, totalTracks: 14 },
    { id: "al3", artistId: "a3", title: "Actual Life 3", releaseYear: 2022, totalTracks: 13 }
  ];

  public getAllArtists(): Artist[] {
    return this.artists;
  }

  public getArtistById(id: string): Artist | undefined {
    return this.artists.find(a => a.id === id);
  }

  public getAlbumsByArtist(artistId: string): Album[] {
    return this.albums.filter(al => al.artistId === artistId);
  }
}
