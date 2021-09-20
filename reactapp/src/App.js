import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';


class App extends Component {
  render() {
      return (
        <div>
           <Navbar title='User App'/>
           <hr />
           <User
           name = 'Hasan'
           salary = '7000'
           department = 'Frontend Development'
           />
           <User
           name = 'Hüseyin'
           salary = '7000'
           department = 'Backend Development'
           />
        </div>
      );
  }
}
export default App;