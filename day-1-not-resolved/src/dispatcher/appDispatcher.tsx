import * as flux from 'flux';
//I work as a HUB, dispatching actions to those who needs it, caugh caugh stores...
const appDispatcher = new flux.Dispatcher<any>()
export default appDispatcher;
