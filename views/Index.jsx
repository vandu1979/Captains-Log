import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    console.log(this.props.logs);
    const{ logs } = this.props;
    return (
      <div>
                <nav>
                    <a href="/logs/new"> Create a New Log Page </a>
                </nav>
                
                <h1> Logs Index Page</h1>
                <ul>
                    <li>navigation</li>
                    <li>weather</li>
                    <li>GPS coordinates</li>
                    <li>Ship sightings</li>

                </ul>

      </div>
    )
  }
}
