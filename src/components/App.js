import React, { Component } from 'react';
require('./global.scss');
import { SongDisplay } from './SongDisplay/SongDisplay'
import PracticeDisplay from './PracticeDisplay/PracticeDisplay'
import { mockSongs } from '../../mock-data/songs.js'


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: mockSongs,
      selectedSong: {
        title: "Blues Clair",
        artist: "Django Reinhardt",
        date_added: "",
        priority: 3,
        timestamps: [],
        tab: "./tabs/bluesclair.txt",
        audio: "https://www.youtube.com/watch?v=RMZHm4KB7Ps"
    }
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(song => console.log(song))
  }

  // displaySelected() {
  //   if(this.selectSong.length) {
  //     return <PracticeDisplay>
  //   }
  // }

  selectSong(songInfo) {
    this.setState({selectedSong: {}})
  }

  unselectSong(songInfo) {
    this.setState({selectedSong: songInfo})
  }

  render() {
    return (
      <div className="App">
        <h1>Etude</h1>
        {/* <PracticeDisplay {...this.state.selectedSong}/> */}
        <SongDisplay unselect={this.unselectSong.bind(this)} select={this.selectSong.bind(this)} songs={this.state.songs}/>
      </div>
    );
  }
}
