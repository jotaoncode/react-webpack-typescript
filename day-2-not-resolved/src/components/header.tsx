import * as React from "react";

export interface IText { text: string }

export class Header extends React.Component<IText, void> {
    render() {
        return <h1>{this.props.text}</h1>
    }
}
