exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    let songPromises = createSong(knex)
    return Promise.all([...songPromises])
  });
};

const createSong = (knex) => {
  return mockSongs.map((song) => {
    const {title, artist, priority, tab, audio, timestamps } = song;

    return knex('songs').insert({
      title, artist, priority, tab, audio, timestamps
    });
  });
};

const mockSongs = [
    {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        date_added: "",
        priority: 4,
        timestamps: [],
        tab: "",
        audio: "./stubData/music/Stairway.mp3"
    },
    {
        title: "Blues Claire",
        artist: "Django Reinhardt",
        date_added: "",
        priority: 3,
        timestamps: [],
        tab: "",
        audio: "./stubData/music/BluesClaire.mp3"
    },
    {
        title: "So What",
        artist: "Miles Davis",
        date_added: "",
        priority: 2,
        timestamps: [],
        tab: "",
        audio: "./stubData/music/BluesClaire.mp3"
    },
    {
        title: "Everybody Wants To Rule The World",
        artist: "Tears for Fears",
        date_added: "",
        priority: 1,
        timestamps: [],
        tab: "",
        audio: "./stubData/music/Everybody.mp3"
    },
    {
        title: "Wake Me Up Before You Go Go",
        artist: "Wham!",
        date_added: "",
        priority: 5,
        timestamps: [],
        tab: "",
        audio: "./stubData/music/jesuswhy.mp3"
    },
]
