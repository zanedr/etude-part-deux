import React from 'react';
import { SongCard } from '../SongCard/SongCard'

export const SongDisplay =  ({ songs, select }) => {
  const songsInOrder = songs.sort((a,z) => {
        return a.artist < z.artist ? -1 : 1
      })
  console.log(songsInOrder);
  return (
    <section id='songs-container'>
      {songsInOrder.map((song, index) => {
        return <SongCard song={song} key={index} select={select}/>
      })}
    </section>
  )
}
