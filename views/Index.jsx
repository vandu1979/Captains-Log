import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const{ logs } = this.props;
    console.log(this.props.logs);
    return (
       
      
        <body>
                <nav>
                    <a href="/logs/new"> Create a New Log Page </a>
                </nav>
                <div>
                <h1> Logs Index Page</h1>
                <ul>
                    {logs.map((log)=>{
                        return ( 
                        <li> The <a href={`/${log.id}`}>{log.title}</a>
                        </li>
                    
                        )
                    })}
                    
                </ul>

                </div>
        </body>
      
    )
  }
}
