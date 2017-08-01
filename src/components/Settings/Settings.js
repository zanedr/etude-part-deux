import React, { Component } from 'react';

export default class Setting extends Component {
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
        console.log('WILL MOUNT', this.props)
        this.setState({
            id: this.props.id,
            title: this.props.title,
            artist: this.props.artist,
            timestamps: this.props.timestamps,
            tab: this.props.tab,
            audio: this.props.audio,
            priority: this.props.priority
        });
    };

    saveSettings() {
        console.log('patch client side')
        fetch('/api/v1/songs', {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                'id': this.state.id,
                'title': this.state.title,
                'artist': this.state.artist,
                'timestamps': this.state.timestamps,
                'tab': this.state.tab,
                'audio': this.state.audio,
                'priority': this.state.priority
            })
        })
        .then(() => {
            console.log('patch good')
        })
        .catch(() => {
            console.log(error)
        })
    }
    render() {
        return(
            <div className="settings-container">
                <container className="settings-input">
                    <p className="settings-input-label">Title:</p>
                    <input className="settings-input setting-title" value={this.state.title} type="text" onChange={(e) => {this.setState({title: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Artist:</p>
                    <input className="settings-input setting-artist" value={this.state.artist} type="text" onChange={(e) => {this.setState({artist: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Timestamp:</p>
                    <input className="settings-input setting-timestamp" value={this.state.timestamps} type="text" onChange={(e) => {this.setState({timestamps: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Tab Location:</p>
                    <input className="settings-input setting-tab" value={this.state.tab} type="text" onChange={(e) => {this.setState({tab: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Audio Location:</p>
                    <input className="settings-input setting-audio" value={this.state.audio} type="text" onChange={(e) => {this.setState({audio: e.target.value})}} />
                </container>
                <container className="settings-input">
                    <p className="settings-input-label">Priority:</p>
                    <input className="settings-input setting-priority" value={this.state.priority} type="text" onChange={(e) => {this.setState({priority: e.target.value})}} />
                </container>
                <button className="settings-button save-settings" onClick={(e) => {this.saveSettings()}}>Save</button>
                <button className="settings-button close-settings" onClick={(e) => {this.props.closeSettings()}}>Close</button>
            </div>
        )
    }
}