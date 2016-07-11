import { IStyleLearntState } from "../stores/dancingStyles";

class PlayAction  {
  type: string
  data: IStyleLearntState
  constructor (type: string, dancingStyle: IStyleLearntState) {
    this.type = type;
    this.data = dancingStyle;
  }
}
export default PlayAction;
