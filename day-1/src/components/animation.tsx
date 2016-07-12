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
      this.state = dancingControls.getControlState();
    }
    componentWillMount() {
      dancingControls.addChangeListener(this.onChange.bind(this));
    }
    componentWillUnmount() {
      dancingControls.removeChangeListener(this.onChange);
    }
    onChange() {
      this.setState(dancingControls.getControlState());
    }
    render() {
      let classPlaying = this.state.isPlaying ? 'play': 'stop';
      let gifRef = this.state.selectedStyle ? this.state.selectedStyle.href : null;
      return <div>
              <iframe src={gifRef} className={classPlaying}></iframe>
             </div>;
    }
}
