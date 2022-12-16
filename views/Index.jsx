import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    console.log(this.props.logs);
    const{ logs } = this.props;
    return (
      <div>
        <nav>
                    <a href="/logs/new"> Create a New log</a>
                </nav>
                <h1> Logs Index Page</h1>
                
      </div>
    )
  }
}
