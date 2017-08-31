import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history'
import Root from './Root'
import {fetchCampuses} from '../redux/campuses'
import {fetchStudents} from '../redux/students'
import Campuses from './allCampuses'
import Students from './allStudents'
import Home from './Home'
import SingleCampus from './singleCampus'
import SingleStudent from './singleStudent'

class Routes extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <Root/>
      </Router>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
