import * as events from 'events';
import CommonAction from '../actions/CommonAction';
import appDispatcher from '../dispatcher/appDispatcher';

export interface IStyleLearntState {
  style: string,
  song: string,
  href: string
}

export interface IStylesLearntState {
  stylesLearnt: Array<IStyleLearntState>,
  existingStyles: Array<IStyleLearntState>
}
/**
 * Mocked values for dancing styles
 */
let dancingStyles: IStylesLearntState = {
    existingStyles :[{
      "style" : "metal",
      "song": "motorhead",
      "href": "//giphy.com/embed/Lsqqem0OD4xCU"
    }, {
      "style": "rock",
      "song": "RockSchool",
      "href": "//giphy.com/embed/b09xElu8in7Lq"
    }, {
      "style": "salsa",
      "song": "dogSalsa",
      "href": "//giphy.com/embed/qYBwkyptCLXaw"
    }],
    stylesLearnt: []
};
let selectedStyle : IStyleLearntState;
const CHANGE_EVENT = 'change';
/**
 * I am in charge of informing the component a change event
 */
class DancingStylesStore extends events.EventEmitter {
  addChangeListener(cb:Function) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb:Function) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  forgetDancingStyle(dancingStyle : IStyleLearntState) {
    let newStylesLearnt = dancingStyles.stylesLearnt.filter(styleLearnt => {return styleLearnt.style !== dancingStyle.style; });
    let newExistingStyles = dancingStyles.existingStyles.concat(dancingStyle);

    dancingStyles = {
      stylesLearnt: newStylesLearnt,
      existingStyles: newExistingStyles
    };
  }
  learnDancingStyle(dancingStyle : IStyleLearntState) {
    let newExistingStyles = dancingStyles.existingStyles.filter(existingStyle => {return existingStyle.style !== dancingStyle.style; });
    let newStylesLearnt = dancingStyles.stylesLearnt.concat(dancingStyle);

    dancingStyles = {
      stylesLearnt: newStylesLearnt,
      existingStyles: newExistingStyles
    };
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getDancingStyles(): Array<IStyleLearntState> {
    return dancingStyles.existingStyles;
  }
  getDancingLearnt(): Array<IStyleLearntState> {
    return dancingStyles.stylesLearnt;
  }
}
const dancingStylesStore = new DancingStylesStore();
appDispatcher.register(function (action: CommonAction) {
  switch(action.type) {
    case "learnDancingStyle":
      dancingStylesStore.learnDancingStyle(action.msg);
      break;
    case "forgetDancingStyle":
      dancingStylesStore.forgetDancingStyle(action.msg);
      break;
    default:
    //No op
  }
  dancingStylesStore.emitChange();
});

export default dancingStylesStore;
