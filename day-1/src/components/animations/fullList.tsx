import * as React from "react";
import { ListItem } from "./listItem";
import learningActions from "../../actions/learningActions";
import { IStyleLearntState, IStylesLearntState } from '../../stores/dancingStyles';
import dancingStyles from '../../stores/dancingStyles';

export interface IStylesLearntProps { }

export class FullList extends React.Component<IStylesLearntProps, IStylesLearntState> {
    constructor() {
      super();
      this.state = dancingStyles.getExistingStyles();
    }
    componentWillMount() {
      dancingStyles.addChangeListener(this.onChange.bind(this));
    }
    componentWillUnmount() {
      dancingStyles.removeChangeListener(this.onChange);
    }
    onChange() {
      this.setState(dancingStyles.getExistingStyles());
    }
    learnDancingStyle(style: IStyleLearntState) {
      return () => {
        learningActions.learnDancingStyle(style);
      }
    }
    public render() {
      var styles = this.state.existingStyles.map((style: IStyleLearntState, index: number) => {
        return (<ListItem liText={style.song} onLiClick={this.learnDancingStyle(style)} key={index}/>);
      });
      return <ul>
              { styles }
             </ul>;
    }
}
