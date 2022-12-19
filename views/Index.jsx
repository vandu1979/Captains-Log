
import React, { Component } from 'react'

//HTML Styling
const bodyStyling = {
    // display: 'block',
    margin: '0 auto',
    height: '50%',
    textAlign:'center',
    backgroundImage: 'url(https://img.freepik.com/premium-vector/yacht-sailboat-sailing-ship-sailing-ship-vector-icon-isolated-blue-background-flat-design-style_8124-97.jpg?w=2000)',
    marginTop: '10px',
    backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
// Basic Styling
const myStyle = {
    color: '#ffffff',
    // backgroundcolor: 'orange',
    paddind: '8px',
    fontSize: '20px',
    borderRadius: '8px',
    // textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'fantasy',
}

export default class Index extends Component {
  render() {
    const { logs } = this.props;
    console.log(this.props.logs);
    return (
        <html style={bodyStyling}>
        <body style={myStyle}>
                <nav>
                    <a href="/logs/new"> Create a New Log Page </a>
                </nav>
                <div>
                <h1> Captaion's Log Page</h1>
                <ul>
                    {logs.map((L)=>{
                        return ( 
                        <li> The <a href= {`/logs/${L.id}`}>{L.title}</a> <br/><br/>
                       <form action={`/logs/${L.id}?_method=Delete`} method="POST">
                                        <input type='submit' value='DELETE'/>
                        </form> <br/><br/>
                    <a href={`/logs/${L.id}/edit`}>Edit This Log</a> <br/><br/>
                    </li>
                        )   
                    })}
                    
                </ul>

                </div>
</body>
</html>
)}}
 

