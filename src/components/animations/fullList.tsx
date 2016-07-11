import * as React from "react";
import { ListItem } from "./listItem";
import { IStyleLearntState, IStylesLearntState } from '../../stores/dancingStyles';
import dancingStyles from '../../stores/dancingStyles';

export interface IStylesLearntProps { }

export class FullList extends React.Component<IStylesLearntProps, IStylesLearntState> {
    constructor() {
      super();
      this.state = {
        stylesLearnt: dancingStyles.getDancingLearnt(),
        existingStyles: dancingStyles.getDancingStyles()
      };
    }
    componentWillMount() {
      dancingStyles.addChangeListener(this.onChange.bind(this));
    }
    componentWillUnmount() {
      dancingStyles.removeChangeListener(this.onChange.bind(this));
    }
    onChange() {
      this.setState({
        stylesLearnt: dancingStyles.getDancingLearnt(),
        existingStyles: dancingStyles.getDancingStyles()
      });
    }
    public render() {
      var styles = this.state.existingStyles.map((style: IStyleLearntState, index: number) => {
        return (<ListItem href={style.href} song={style.song} style={style.style} key={index}/>);
      });
      return <ul>
              { styles }
             </ul>;
    }
}
