import * as React from "react";
import { Playable } from './playable';
import { IStyleLearntState, IStylesLearntState } from '../../stores/dancingStyles';
import dancingStyle from '../../stores/dancingStyles';

export interface IStylesLearntProps { }

export class ListToPlay extends React.Component<IStylesLearntProps, IStylesLearntState> {
    constructor() {
      super();
      this.state = {
        stylesLearnt: dancingStyle.getDancingLearnt(),
        existingStyles: dancingStyle.getDancingStyles()
      };
    }
    componentWillMount() {
      //TODO 1: Subscribe to dancingStyle change event 
    }
    componentWillUnmount() {
      //TODO 1: Unsubscribe to dancingStyle change event
    }
    onChange() {
      //TODO 1: Change the state of Playables by setting a new state to the component
      //Check for setState method.
    }
    public render() {
      var styles = this.state.stylesLearnt.map((style: IStyleLearntState, index: number) => {
        return (<Playable href={style.href} song={style.song} style={style.style} key={index}/>);
      });
      return <ul>
              { styles }
             </ul>;
    }
}
