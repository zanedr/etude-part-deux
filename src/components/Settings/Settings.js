import React from 'react';

export const Setting = (props) => {
    const { title, artist, timestamps, tab, audio, priority, closeSettings } = props;

    // saveSettings() {
    //     fetch('/api/v1/songs', {
    //     method: 'PATCH',
    //     headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    //     body: 'id=12&day=1')
    // }

    return(
        <div class="settings-container">
            <container class="settings-input">
                <p class="settings-input-label">Title:</p>
                <input class="settings-input setting-title" value={title} type="text" />
            </container>
            <container class="settings-input">
                <p class="settings-input-label">Artist:</p>
                <input class="settings-input setting-artist" value={artist} type="text" />
            </container>
            <container class="settings-input">
                <p class="settings-input-label">Timestamp:</p>
                <input class="settings-input setting-timestamp" value={timestamps} type="text" />
            </container>
            <container class="settings-input">
                <p class="settings-input-label">Tab Location:</p>
                <input class="settings-input setting-tab" value={tab} type="text" />
            </container>
            <container class="settings-input">
                <p class="settings-input-label">Audio Location:</p>
                <input class="settings-input setting-audio" value={audio} type="text" />
            </container>
            <container class="settings-input">
                <p class="settings-input-label">Priority:</p>
                <input class="settings-input setting-priority" value={priority} type="text" />
            </container>
            <button class="settings-button save-settings" onClick={this.saveSettings()}>Close</button>
            <button class="settings-button close-settings" onClick={closeSettings()}>Close</button>
        </div>
    )
}