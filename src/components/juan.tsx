import * as React from "react";

export interface JuanProps { position: string; }

export class Juan extends React.Component<JuanProps, {}> {
    render() {
        return <div>This is Juan, his position is: {this.props.position}</div>;
    }
}
