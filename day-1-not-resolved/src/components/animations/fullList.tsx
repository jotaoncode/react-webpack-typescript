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
      //TODO 2: Subscribe to dancingStyles change event with the onChange function
    }
    componentWillUnmount() {
      //TODO 2: Unsubscribe to dancing styles change event with the onChange function
    }
    onChange() {
      //TODO 2: Change the state of Playables by setting a new state to the component
      //Check for setState method.
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
