import React from 'react';

export const SongCard =  ({ song }) => {
  return (
    <section className='song'>
      <div className='title-artist'>
        <h2>Title:  {song.title}</h2>
        <p>Artist: {song.artist}</p>
      </div>
      <div className='tab-audio'>
        <p>tab</p>
        <p>audio</p>
      </div>
    </section>
  )
}
