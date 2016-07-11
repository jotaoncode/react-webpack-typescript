import * as React from "react";
import { Animation } from './animation';
import { ListToPlay } from './playable/playables';
import { FullList } from './animations/fullList';

export interface ApplicationProps { floor: string; }

export class Application extends React.Component<ApplicationProps, {}> {
    render() {
        return <div>
                <section><ListToPlay/></section>
                <section><Animation /></section>
                <section><FullList/></section>
               </div>;
    }
}
