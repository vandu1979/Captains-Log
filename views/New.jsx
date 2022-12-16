import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Caption Log Page</h1>
        <form action="/logs" method="POST">
          Title:  <input type="text" title="title"/> <br />
          Entry: <input type="textarea" entry="entry"/> <br />
          Ship Is Broken: <input type="checkbox" name="shipIsBroken" /> <br />
          <input type="submit" value="SUBMIT"/> 
        </form>
      </div>
    )
  }
}
