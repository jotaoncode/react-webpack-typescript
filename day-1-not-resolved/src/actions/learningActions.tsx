import appDispatcher from '../dispatcher/appDispatcher';
import CommonAction from '../actions/CommonAction';
import { IStyleLearntState } from '../stores/dancingStyles';

class LearningActions {
  forgetDancingStyle(dancingStyle: IStyleLearntState) {
    //TODO 11: Dipatch dancing style with a new instance Common Action and the action "forgetDancingStyle"

  }
  learnDancingStyle(dancingStyle: IStyleLearntState) {
    //TODO 10: Dipatch dancing style with a new instance Common Action and the action "learnDancingStyle"

  }
  setPlayingStyle(dancingStyle: IStyleLearntState) {
    //TODO 10: Dipatch dancing style with a new instance Common Action and the action "setPlayingStyle"
    
  }
}

export default new LearningActions();
