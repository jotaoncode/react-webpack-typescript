import * as React from "react";
import learningActions from "../../actions/learningActions";
import { IStyleLearntState } from '../../stores/dancingStyles';

export class ListItem extends React.Component<IStyleLearntState, void> {
    learnDancingStyle() {
      learningActions.learnDancingStyle(this.props);
    }
    render() {
        return <li onClick={this.learnDancingStyle.bind(this)}>{this.props.song}</li>;
    }
}
