import React from 'react';

export const SongCard =  ({ song, select }) => {

  const checkForTab = () => {
    if(song.tab.length > 5) {
      return ( <span>&#10004;</span> )
    } else {
      return ( <span>&#x2717;</span>)
    }
  }

  const checkForAudio = () => {
    if(song.tab.length > 0) {
      return ( <span>&#10004;</span> )
    } else {
      return ( <span>&#x2717;</span>)
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
