import * as React from "react";
import learningActions from "../../actions/learningActions";
import dancingControls from '../../stores/dancingControls';
import playActions from "../../actions/playActions";
import { IStyleLearntState } from "../../stores/dancingStyles";

export class Playable extends React.Component<IStyleLearntState, void> {
    //TODO 5 Implement Forget Dancing Style button Remove
    //TODO 4 Implement Toggle Play button-play
    render() {
      let isPlayingNow = dancingControls.isPlaying() && dancingControls.getSelectedStyle().style === this.props.style;
      let textButton = "Play!";
      if (isPlayingNow) {
        textButton = "Stop!";
      }
      return <li>
              {this.props.song}
              <button className="button-play">{textButton}</button>
              <button>Remove</button>
             </li>;
    }
}
