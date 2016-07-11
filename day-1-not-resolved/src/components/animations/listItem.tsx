import * as React from "react";
import learningActions from "../../actions/learningActions";
import { IStyleLearntState } from '../../stores/dancingStyles';

export class ListItem extends React.Component<IStyleLearntState, void> {
    //TODO 3: Implement a method to call an action that a remove this item and sets it to playable
    render() {
        return <li>{this.props.song}</li>;
    }
}
