import React, { Component } from 'react';

export class AddSong extends Component {
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

    saveAddSong() {
        let processDoubleLineBreaksTab = this.state.tab.split('\n\n')
        let processedTab = []
        processDoubleLineBreaksTab.forEach((line) => {
            line.split('\n').forEach((interiorLine) => {
                processedTab.push(interiorLine)
            })
        })
        let artist = this.state.artist || 'Unknown Artist'
        console.log('patch client side', artist)
        fetch('/api/v1/songs', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                'id': this.state.id,
                'title': this.state.title,
                'artist': artist,
                'timestamps': this.state.timestamps,
                'tab': JSON.stringify(processedTab),
                'audio': this.state.audio,
                'priority': this.state.priority
            })
        })
        .then((res) => {
            this.props.closeAddSong();
            if(res.status !== 201) {
                alert('Failed to post to database.  Please include a song title.')
            }
            console.log('post good', res);
        })
        .catch(() => {
            console.log(error)
        })
    }
    render() {
        return(
            <div className="addSong-container">
                <h2>Add a new song</h2>
                <container id='first-container' className="addSong-input">
                    <p className="addSong-input-label">Title:</p>
                    <input className="addSong-input addSong-title" placeholder="Song Title" type="text" placeholder='Enter Song Title' onChange={(e) => {this.setState({title: e.target.value})}} />
                </container>
                <container className="addSong-input">
                    <p className="addSong-input-label">Artist:</p>
                    <input className="addSong-input addSong-artist" placeholder="Artist Name" type="text" placeholder='Enter Artist' onChange={(e) => {this.setState({artist: e.target.value})}} />
                </container>
                <container className="addSong-input">
                    <p className="addSong-input-label">Paste Tab Here:</p>
                    <textarea className="addSong-input addSong-tab" placeholder={this.state.tab} type="text" onChange={(e) => {this.setState({tab: e.target.value})}} ></textarea>
                </container>
                <container className="addSong-input">
                    <p className="addSong-input-label">Audio URL:</p>
                    <input className="addSong-input addSong-audio" placeholder="" type="text" placeholder='Enter Audio Location' onChange={(e) => {this.setState({audio: e.target.value})}} />
                </container>
                <container className="addSong-input">
                    <p className="addSong-input-label">Priority:</p>
                    <input className="addSong-input addSong-priority" placeholder="Priority" type="text" placeholder='Priority' onChange={(e) => {this.setState({priority: e.target.value})}} />
                </container>
                <container>
                  <button className="addSong-button save-addSong" onClick={(e) => {this.saveAddSong()}}>Save</button>
                  <button className="addSong-button close-addSong" onClick={(e) => {this.props.closeAddSong()}}>Close</button>
                </container>
            </div>
        )
    }
}
