import React, { Component } from 'react' ;
import './App.css' ;
import Profile from './components/Profile'

export default class App extends Component {
  state = {
    person : {
      fullName : 'iheb mannai',
      bio : 'he is smart', 
      imgSrc : '/28471474_1933061906722798_6846834042043856043_n.jpg', 
      profession : 'Developper',
      phone : '99 98 92 43',
      email: 'ihebmn6@gmail.com'
    },
    show : true ,
    
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary" style={{width: '10%', marginLeft: '45%' , marginTop: '10px'}} onClick={() => this.setState({show : !this.state.show})}>Click</button>
    
{this.state.show ? <Profile/> : null}
     </div>



    

  
    )
  }
}

