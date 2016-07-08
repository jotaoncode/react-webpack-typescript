import events = require('events');
/**
 * Mocked values for dancing styles
 */
let dancingStyles = {
  "rock": {
    "song": "stones",
    "bg": ""
  },
  "metal": {
    "song": "robzombie",
    "bg": ""
  },
  "techno": {
    "song": "garrix",
    "bg": ""
  },
  "eighties": {
    "song": "eighties",
    "bg": ""
  }
};
const CHANGE_EVENT = 'change';

class DancingStyles extends events.EventEmitter {
  addChangeListener(cb:Function) {
    this.on(CHANGE_EVENT, cb);
  }
  removeEventListener(cb:Function) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  getList() {
    return dancingStyles;
  }
}
