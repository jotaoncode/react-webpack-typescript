import * as React from "react";
import { Animation } from './animation';
import { ListToPlay } from './playable/playables';
import { FullList } from './animations/fullList';
import { Header } from './header';
import { Footer } from './footer';

export interface ApplicationProps { }

export class Application extends React.Component<ApplicationProps, {}> {
    render() {
        return <div>
                <Header text="My first React Application"/>
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
                 <Footer text="Learning ReactJS" link="https://github.com/reactjs"/>                
               </div>;

    }
}
