require('./global.scss');
import React, { Component } from 'react';
import { SongDisplay } from './SongDisplay/SongDisplay'
import PracticeDisplay from './PracticeDisplay/PracticeDisplay'
import { mockSongs } from '../../mock-data/songs.js'


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: mockSongs,
      selectedSong: {}
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(song => console.log())
  }

  displaySelected() {
    if(this.state.selectedSong.title) {
      return <PracticeDisplay selectedSong={this.state.selectedSong} unselect={this.unselectSong.bind(this)} />
    }
  }

  selectSong(songInfo) {
    console.log('clicked song')
    console.log(songInfo)
    this.setState({selectedSong: songInfo})
    console.log(this.state)
  }

  unselectSong(songInfo) {
    this.setState({selectedSong: {}})
  }

  render() {
    return (
      <div className="App">
        {this.displaySelected()}
        <h1>Etude</h1>
        {/* <PracticeDisplay {...this.state.selectedSong}/> */}
        <SongDisplay select={this.selectSong.bind(this)} songs={this.state.songs}/>
      </div>
    );
  }
}
