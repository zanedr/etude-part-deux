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
        id: 11,
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        date_added: "",
        priority: 4,
        timestamps: [],
        tab: "Swat turds around the house throwup on your pillow. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed dream about hunting birds. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap fall over dead (not really but gets sypathy) where is my slave? I’m getting hungry, small kitty warm kitty little balls of fur kick up litter you call this cat food. Scamper kitty loves pigs cats go for world domination and fooled again thinking the dog likes me run in circles i like big cats and i can not lie hide from vacuum cleaner. With tail in the air meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat chase red laser dot or small kitty warm kitty little balls of fur immediately regret falling into bathtub for knock dish off table head butt cant eat out of my own dish and scratch leg; meow for can opener to feed me. Mice cat not kitten around play riveting piece on synthesizer keyboard warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, jump around on couch, meow constantly until given food, sniff sniff. I am the best destroy couch meow to be let in lies down . Give attitude who’s the baby. Throwup on your pillow dream about hunting birds, for knock over christmas tree kitty loves pigs but ignore the squirrels, you’ll never catch them anyway scratch the postman wake up lick paw wake up owner meow meow. Meowing non stop for food kitty ipsum dolor sit amet, shed everywhere shed everywhere",
        audio: "https://www.youtube.com/watch?v=IS6n2Hx9Ykk"
    },
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(song => console.log())
  }

  // displaySelected() {
  //   if(this.selectSong.length) {
  //     return <PracticeDisplay>
  //   }
  // }

  selectSong(songInfo) {
    console.log('clicked song')
    // this.setState({selectedSong: {}})
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
