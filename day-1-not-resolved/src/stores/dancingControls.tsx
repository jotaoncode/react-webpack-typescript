import * as events from 'events';
import PlayAction from '../actions/PlayAction';
import appDispatcher from '../dispatcher/appDispatcher';
import { IStyleLearntState } from '../stores/dancingStyles';
/**
 * Mocked values for dancing styles
 */
let isPlaying = false;

const CHANGE_EVENT = 'change';
let actualStyle : IStyleLearntState;
/**
 * I am in charge of informing the component a change event
 */
class PlayingActions extends events.EventEmitter {
  //Add callback to change event
  addChangeListener(cb:Function) {
    this.on(CHANGE_EVENT, cb);
  }
  //Remove callback to change event
  removeChangeListener(cb:Function) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  isPlaying() {
    return isPlaying;
  }

  toggleAnimation(dancingStyle: IStyleLearntState) {
    //TODO 9: Add dancing style as actual style variable when it is playing
    //Toggle is Playing value
  }
  getSelectedStyle() {
    return actualStyle;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}
const playingStore = new PlayingActions();

appDispatcher.register(function (action: PlayAction) {
  switch(action.type) {
    case "toggleDancing":
      //TODO 9: Call toggle Animation
      break;
    default:
    //No op
  }
  playingStore.emitChange();
});

export default playingStore;
