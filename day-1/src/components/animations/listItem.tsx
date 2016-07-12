import * as React from "react";

interface IliItem {
  onLiClick: Function,
  liText: string
}
/**
 * Representational component
 */
export class ListItem extends React.Component<IliItem, void> {
    render() {
        return <li onClick={this.props.onLiClick}>{this.props.liText}</li>;
    }
}
