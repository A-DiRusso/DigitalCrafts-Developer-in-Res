import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/meat'>Meat</Link></li>
          <li><Link to='/dairy'>Dairy</Link></li>          
          <li><Link to='/frozen'>Frozen</Link></li>
        </ul>
      </div>
    )
  }
}
