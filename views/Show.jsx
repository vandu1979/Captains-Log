import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    //on line 6 whatever name object created, use that on line 11-13
    const log  = this.props.log;
    console.log(this.props.log);
    return (
      <div>
        <h1>Show Page</h1>
        <p>The {log.title}</p>
        <p>{log.entry}</p>
        <p> {log.shipIsBroken ? 'It is ready to sail' : 'It is broken'}</p>
        
        
        <a href="/logs">Back</a>
        </div>
    )
  }
}
