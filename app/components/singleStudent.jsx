import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios'


class SingleStudent extends Component {
  constructor() {
    super()
    this.state = {
      currentStudent: {}
    }
  }



  componentDidMount() {
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(currentStudent => this.setState({currentStudent}))
  }


  render() {

  const student = this.state.currentStudent
  const campusObj = student.campus

  return (

    <div>
      <h1> U R AT A SINGLE STUDENT</h1>
      <h2>{student.name}</h2>
      {campusObj ?
        <Link to={`/campuses/${campusObj.id}`} >
        <h3>
        {campusObj.name}
        </h3>
        </Link>: null}

    </div>
  )
  }
}

export default SingleStudent
