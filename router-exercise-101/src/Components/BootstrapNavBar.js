import React from 'react';
import { Link } from 'react-router-dom';

export default function BootstrapNavBar() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          {/* <a className="navbar-brand" href="#">WebSiteName</a> */}
          {/* <Link className="navbar-brand" href="#">WebSiteName</Link> */}
        </div>
        <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/atlanta">Atlanta</Link></li>
            <li><Link to="/one">One</Link></li>
            <li><Link to="/two">Two</Link></li>
            <li><Link to="/three">Three</Link></li>
            <li><Link to="/four">Four</Link></li>
          {/* <li><a href="/">Home</a></li>
            <li><a href="/one">One</a></li>
            <li><a href="/two">Two</a></li>
            <li><a href="/three">Three</a></li>
            <li><a href="/four">Four</a></li> */}
        </ul>
      </div>
    </nav> 
  )
}

