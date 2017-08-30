import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import Campuses from './allCampuses'
import Students from './allStudents'
import Home from './Home'


function Navbar() {

  return(
  <div>
    <ul className="nav nav-tabs">
      <li><Link to="/campuses">Campuses</Link></li>
      <li><Link to="/students">Students</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>

  </div>
  )

}

export default Navbar
