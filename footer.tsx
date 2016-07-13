import * as React from "react";

export interface ILink	 { text: string,
						   link: string }

export class Footer extends React.Component<ILink, void> {
    render() {
        return <footer>
        			<a href={this.props.link}>{this.props.text}</a>
        	   </footer>
    }
}
