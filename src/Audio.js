import React, { Component } from 'react';
import musica from "./musica.mp3";

class Audio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.audioRef = React.createRef();
  }

  
  togglePlay = () => {
    const audio = this.audioRef.current;
    if (audio.paused) {
      audio.play();
      this.setState({ isPlaying: true });
    } else {
      audio.pause();
      this.setState({ isPlaying: false });
    }
  }

  render() {
    return (
      <div>
        <button id="musica" onClick={this.togglePlay}>
          {this.state.isPlaying ? 'Stop' : 'Reproduce música'}
        </button>
        <audio ref={this.audioRef} src= {musica} />
      </div>
    );
  }
}

export {Audio};