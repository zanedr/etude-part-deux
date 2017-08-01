require('./global.scss');
import React, { Component } from 'react';
import { SongDisplay } from './SongDisplay/SongDisplay'
import PracticeDisplay from './PracticeDisplay/PracticeDisplay'
import { mockSongs } from '../../mock-data/songs.js'


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      selectedSong: {}
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(songs => {
      let songList = JSON.parse(songs)
      return this.setState({songs: songList})
    })
  }

  displaySelected() {
    if(this.state.selectedSong.title) {
      return <PracticeDisplay selectedSong={this.state.selectedSong} unselect={this.unselectSong.bind(this)} />
    }
  }

  selectSong(songInfo) {
    this.setState({selectedSong: songInfo})
  }

  unselectSong(songInfo) {
    this.setState({selectedSong: {}})
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(songs => {
      let songList = JSON.parse(songs)
      return this.setState({songs: songList})
    })
  }

  render() {
    return (
      <div className="App">
        {this.displaySelected()}
        <h1>Etude</h1>
        <SongDisplay select={this.selectSong.bind(this)} songs={this.state.songs}/>
      </div>
    );
  }
}
