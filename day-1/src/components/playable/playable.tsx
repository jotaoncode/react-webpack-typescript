import * as React from "react";
import learningActions from "../../actions/learningActions";
import dancingControls from '../../stores/dancingControls';
import playActions from "../../actions/playActions";
import { IStyleLearntState } from "../../stores/dancingStyles";

export class Playable extends React.Component<IStyleLearntState, void> {
    forgetDancingStyle() {
      learningActions.forgetDancingStyle(this.props);
    }
    togglePlay() {
      playActions.toggleAnimation(this.props);
    }
    render() {
      let isPlayingNow = dancingControls.isPlaying() && dancingControls.getSelectedStyle().style === this.props.style;
      let textButton = "Play!";
      if (isPlayingNow) {
        textButton = "Stop!";
      }
      return <li>
              {this.props.song}
              <button onClick={this.props.}>{textButton}</button>
              <button onClick={this.forgetDancingStyle.bind(this)}>Remove</button>
             </li>;
    }
}
