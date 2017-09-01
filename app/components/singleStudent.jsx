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
        goes to {campusObj.name}
        </h3>
        <h3>
        can be emailed at {student.email}
        </h3>
        </Link>: null}
      <Link to={`/students/${student.id}/edit`}>
      <button>Edit stuff bout dis student</button>
      </Link>

    </div>
  )
  }
}

export default SingleStudent
