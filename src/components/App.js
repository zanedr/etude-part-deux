import React, { Component } from 'react';
// require('./App.css');
require('./global.scss');
import { SongDisplay } from './SongDisplay/SongDisplay';
import { mockSongs } from '../../mock-data/songs.js';
import MusicPlayer from './MusicPlayer/MusicPlayer';


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: mockSongs
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(song => console.log(song))
  }

  render() {
    return (
      <div className="App">
        <h1>Etude</h1>
        <SongDisplay songs={this.state.songs}/>
        <MusicPlayer />
      </div>
    );
  }
}
