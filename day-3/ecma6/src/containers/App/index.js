import React, { Component } from 'react';
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        {this.props.children}
      </section>
    )
  }
}
export default App
