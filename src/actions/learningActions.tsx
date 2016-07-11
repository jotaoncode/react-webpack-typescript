import appDispatcher from '../dispatcher/appDispatcher';
import CommonAction from '../actions/CommonAction';
import { IStyleLearntState } from '../stores/dancingStyles';

class LearningActions {
  forgetDancingStyle(dancingStyle: IStyleLearntState) {
    appDispatcher.dispatch(new CommonAction("forgetDancingStyle", dancingStyle));
  }
  learnDancingStyle(dancingStyle: IStyleLearntState) {
    appDispatcher.dispatch(new CommonAction("learnDancingStyle", dancingStyle));
  }
  setPlayingStyle(dancingStyle: IStyleLearntState) {
    appDispatcher.dispatch(new CommonAction("setPlayingStyle", dancingStyle));
  }
}

export default new LearningActions();
