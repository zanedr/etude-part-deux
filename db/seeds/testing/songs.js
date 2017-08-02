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
        tab: "../../../mock-data/tabs/stairway.txt",
        audio: "https://www.youtube.com/watch?v=IS6n2Hx9Ykk"
    },
    {
        title: "Blues Clair",
        artist: "Django Reinhardt",
        date_added: "",
        priority: 3,
        timestamps: [],
        tab: "../../../mock-data/tabs/bluesclair.txt",
        audio: "https://www.youtube.com/watch?v=RMZHm4KB7Ps"
    },
    {
        title: "So What",
        artist: "Miles Davis",
        date_added: "",
        priority: 2,
        timestamps: [],
        tab: "../../../mock-data/tabs/sowhat.txt",
        audio: "https://www.youtube.com/watch?v=ylXk1LBvIqU"
    },
    {
        title: "Everybody Wants To Rule The World",
        artist: "Tears for Fears",
        date_added: "",
        priority: 1,
        timestamps: [],
        tab: "../../../mock-data/tabs/everybody.txt",
        audio: "https://www.youtube.com/watch?v=ST86JM1RPl0"
    },
    {
        title: "Wake Me Up Before You Go Go",
        artist: "Wham!",
        date_added: "",
        priority: 5,
        timestamps: [],
        tab: "../../../mock-data/tabs/wakemeup.txt",
        audio: "https://www.youtube.com/watch?v=pIgZ7gMze7A"
    },
]
