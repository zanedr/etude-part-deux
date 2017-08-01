import React from 'react';
import { SongCard } from '../SongCard/SongCard'

export const SongDisplay =  ({ songs, select }) => {
  return (
    <section id='songs-container'>
      {songs.map((song, index) => {
        return <SongCard song={song} key={index} select={select}/>
      })}
    </section>
  )
}
