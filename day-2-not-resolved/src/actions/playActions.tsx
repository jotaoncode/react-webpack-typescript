import appDispatcher from '../dispatcher/appDispatcher';
import PlayAction from '../actions/PlayAction';
import { IStyleLearntState } from "../stores/dancingStyles";

class PlayActions {
  toggleAnimation(dancingStyle: IStyleLearntState) {
    appDispatcher.dispatch(new PlayAction("toggleDancing", dancingStyle));
  }
}

export default new PlayActions();
