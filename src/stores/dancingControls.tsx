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
  addChangeListener(cb:Function) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb:Function) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  isPlaying() {
    return isPlaying;
  }
  toggleAnimation(dancingStyle: IStyleLearntState) {
    isPlaying = !isPlaying;
    if (isPlaying) {
      actualStyle = dancingStyle;
    }
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
      playingStore.toggleAnimation(action.data);
      break;
    default:
    //No op
  }
  playingStore.emitChange();
});

export default playingStore;
