import * as React from "react";
import { Juan } from './juan';

export interface DanceFloorProps { floor: string; }

export class DanceFloor extends React.Component<DanceFloorProps, {}> {
    render() {
        return <section><Juan position="bored"/></section>;
    }
}
