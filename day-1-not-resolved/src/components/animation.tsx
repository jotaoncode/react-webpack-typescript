import * as React from "react";
import playActions from "../actions/playActions";
import dancingControls from '../stores/dancingControls';
import dancingStyles from '../stores/dancingStyles';
import {IStyleLearntState} from '../stores/dancingStyles';
export interface IAnimationProps { }
export interface IAnimationState { isPlaying: boolean; selectedStyle: IStyleLearntState}

export class Animation extends React.Component<IAnimationProps, IAnimationState> {
    constructor() {
      super();
      this.state = {
        isPlaying: dancingControls.isPlaying(),
        selectedStyle: dancingControls.getSelectedStyle()
      };
    }
    componentWillMount() {
      //TODO 6: Subscribe to dancingControls "change" event with the onChange function
    }
    componentWillUnmount() {
      //TODO 6: Unsubscribe from dancingControls "change" event  with the onChange function
    }
    onChange() {
      //TODO 6: Set state of animation component check setState method please
    }
    render() {
      let classPlaying = this.state.isPlaying ? 'play': 'stop';
      let gifRef = this.state.selectedStyle ? this.state.selectedStyle.href : null;
      return <div>
              <iframe src={gifRef} className={classPlaying}></iframe>
             </div>;
    }
}
