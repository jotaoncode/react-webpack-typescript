import { IStyleLearntState } from '../stores/dancingStyles';

class CommonAction  {
  type: string
  msg: IStyleLearntState
  constructor (type: string, msg: IStyleLearntState) {
    this.type = type;
    this.msg = msg;
  }
}
export default CommonAction;
