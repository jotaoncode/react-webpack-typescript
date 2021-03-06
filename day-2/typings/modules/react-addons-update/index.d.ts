// Generated by typings
// Source: https://raw.githubusercontent.com/convoyinc/typed-react-addons-update/7965758/index.d.ts
declare module '~react-addons-update/index' {
module update {
  type PushCommand = {$push: any[]};
  type UnshiftCommand = {$unshift: any[]};
  type SpliceCommand = {$splice: any[][]};
  type SetCommand = {$set: any};
  type MergeCommand = {$merge: {}};
  type ApplyCommand = {$apply?: (value:any[]) => any};

  type ArrayCommand = PushCommand | UnshiftCommand | SpliceCommand | SetCommand | ApplyCommand;
  type ObjectCommand = SetCommand | MergeCommand | ApplyCommand;

  type SpecPath = {[key:string]: SpecPath | ArrayCommand | ObjectCommand};
  type ObjectSpec = ObjectCommand | SpecPath;
}

function update(value:any[], spec: update.ArrayCommand): any[];
function update(value:{}, spec: update.ObjectSpec): {};

export = update;
}
declare module 'react-addons-update/index' {
import main = require('~react-addons-update/index');
export = main;
}
declare module 'react-addons-update' {
import main = require('~react-addons-update/index');
export = main;
}
