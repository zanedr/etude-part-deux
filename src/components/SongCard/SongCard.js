import React from 'react';

export const SongCard =  ({ song, select }) => {

  const checkForTab = () => {
    if(song.tab.length > 5) {
      return ( <span className="affirmitive">&#10004;</span> )
    } else {
      return ( <span className="negative">&#x2717;</span>)
    }
  }

  const checkForAudio = () => {
    if(song.audio.length > 0) {
      return ( <span className="affirmitive">&#10004;</span> )
    } else {
      return ( <span className="negative">&#x2717;</span>)
    }
  }

  return (
    <section onClick={()=> {select(song)}} className='song'>
      <div className='title-artist'>
        <h2>Title:  {song.title}</h2>
        <p>Artist: {song.artist}</p>
      </div>
      <div className='tab-audio'>
        <p>{checkForTab()} tab</p>
        <p>{checkForAudio()} audio</p>
      </div>
    </section>
  )
}
