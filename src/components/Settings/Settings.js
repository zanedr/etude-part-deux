import React, { Component } from 'react';

export class Settings extends Component {
    constructor(props) {
      super(props)
      this.state = {
          id: 0,
          title: '',
          artist: '',
          timestamps: '',
          tab: '',
          audio: '',
          priority: 0
      }
    }

    componentWillMount() {
      const { id, title, artist, timestamps, tab, audio, priority } = this.props;

      this.setState({
          id: id || this.state.id,
          title: title || this.state.title,
          artist: artist || this.state.artist,
          timestamps: timestamps || this.state.timestamps,
          tab: tab || this.state.tab,
          audio: audio || this.state.audio,
          priority: priority || this.state.priority
      });
    };

    saveSettings() {
        let processedTab = []
        let processDoubleLineBreaksTab
        let completelyProcessedTab = ''
        if(this.state.tab !== this.props.tab) {
            processDoubleLineBreaksTab = this.state.tab.split('\n\n')
            processDoubleLineBreaksTab.forEach((line) => {
                line.split('\n').forEach((interiorLine) => {
                    processedTab.push(interiorLine)
                })
            })
            completelyProcessedTab = JSON.stringify(processedTab)
        } else {
            completelyProcessedTab = this.state.tab
        }

        fetch('/api/v1/songs', {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                'id': this.state.id,
                'title': this.state.title,
                'artist': this.state.artist,
                'timestamps': this.state.timestamps,
                'tab': completelyProcessedTab,
                'audio': this.state.audio,
                'priority': this.state.priority
            })
        })
        .then(() => {
            console.log('patch good')
            this.props.updateTab(completelyProcessedTab, this.state)
            this.props.closeSettings();
        })
        .catch(() => {
            console.log(error)
        })
    }

    deleteSong() {
      fetch('/api/v1/songs', {
          method: 'DELETE',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify({
              'artist': this.state.artist,
              'title': this.state.title
          })
      })
      .then(() => {
          this.props.closeSettings();
          this.props.closeOut();
          console.log('delete successful')
      })
      .catch(() => {
          console.log(error)
      })
    }

    render() {
        return(
            <div className="settings-container">
                <button id='delete-song-button' onClick={()=> this.deleteSong()}>Delete Song</button>
                <container id='first-container' className="settings-input">
                    <p className="settings-input-label">Title:</p>
                    <input className="settings-input setting-title" value={this.state.title} type="text" placeholder='Enter Song Title' onChange={(e) => {this.setState({title: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Artist:</p>
                    <input className="settings-input setting-artist" value={this.state.artist} type="text" placeholder='Enter Artist' onChange={(e) => {this.setState({artist: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Timestamp:</p>
                    <input className="settings-input setting-timestamp" value={this.state.timestamps} type="text" placeholder='Enter Timestamp' onChange={(e) => {this.setState({timestamps: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Paste Tab Here:</p>
                    <textarea className="settings-input setting-tab" value={this.state.tab} type="text" onChange={(e) => {this.setState({tab: e.target.value})}} ></textarea>
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Audio Location:</p>
                    <input className="settings-input setting-audio" value={this.state.audio} type="text" placeholder='Enter Audio Location' onChange={(e) => {this.setState({audio: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Priority:</p>
                    <input className="settings-input setting-priority" value={this.state.priority} type="text" placeholder='Priority' onChange={(e) => {this.setState({priority: e.target.value})}} />
                </container>
                <container>
                  <button className="settings-button save-settings" onClick={(e) => {this.saveSettings()}}>Save</button>
                  <button className="settings-button close-settings" onClick={(e) => {this.props.closeSettings()}}>Close</button>
                </container>
            </div>
        )
    }
}
