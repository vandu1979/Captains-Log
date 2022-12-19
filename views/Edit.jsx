import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const { log } = this.props;
    console.log(log);
    return (
        
      <div>
        <h1>Edit Log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title"defaultValue={log.title} /><br/><br/>
                 Entry: <input type="text" name="entry"defaultValue={log.entry} /><br/><br/>
               Ship is Broken: {
                        log.shipIsBroken ?
                        <input type="checkbox" name="shipIsBroken" defaultChecked />:
                       <input type="checkbox" name="shipIsBroken" />} <br/><br/>
                       <input type="submit" value="submit changes" />
            </form>
      </div>
    )
  }
}
