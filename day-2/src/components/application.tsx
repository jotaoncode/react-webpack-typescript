import * as React from "react";
import { Animation } from './animation';
import { ListToPlay } from './playable/playables';
import { FullList } from './animations/fullList';

export interface ApplicationProps { }

export class Application extends React.Component<ApplicationProps, {}> {
    render() {
        return <div>
                <section className="list-to-play">
                  <h1>Playable List</h1>
                  <ListToPlay/>
                </section>
                <section className="animation">
                  <h1>Animation</h1>
                  <Animation />
                </section>
                <section className="full-list">
                  <h1>Choosing List</h1>
                  <FullList/>
                </section>
               </div>;
    }
}
