import React from 'react';

export const SongCard =  ({ song, select }) => {
  return (
    <section className='song'>
      <div onClick={()=>select(song)} className='title-artist'>
        <h2>Title:  {song.title}</h2>
        <p>Artist: {song.artist}</p>
      </div>
      <div className='tab-audio'>
        <p><span>&#10004;</span>tab</p>
        <p><span>&#x2717;</span>audio</p>
      </div>
    </section>
  )
}
