import React from 'react';

export const SongCard =  ({ song }) => {
  return (
    <section className='song'>
      <h2>Title:  {song.title}</h2>
      <p>Artist: {song.artist}</p>
    </section>
  )
}
