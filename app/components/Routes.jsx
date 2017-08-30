import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history'
import Root from './Root'
import allCampuses from './allCampuses'
import {fetchCampuses} from '../redux/campuses'
import {fetchStudents} from '../redux/students'

class Routes extends Component {

  componentWillMount() {
    this.props.fetchInitialData();
  }

  render() {

    return(
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={allCampuses}/>

          </Switch>
        </Root>
      </Router>
    )
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
