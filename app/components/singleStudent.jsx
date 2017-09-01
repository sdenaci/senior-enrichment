import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route,Switch, Link} from 'react-router-dom';
import axios from 'axios'
import EditStudent from './EditStudent'


class SingleStudent extends Component {
  constructor() {
    super()
    this.state = {
      showEdit: false,
      currentStudent: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(currentStudent => this.setState({currentStudent}))
  }

  handleClick() {
    if (this.state.showEdit === false)
        {this.setState({showEdit: true})}
    else this.setState({showEdit:false})
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

      <button onClick={this.handleClick}>{this.state.showEdit? 'plz no more editing' : 'Edit stuff bout me'}</button>

      {this.state.showEdit ? <EditStudent studentId={this.state.currentStudent.id}/> : null}

    </div>
  )
  }
}

const mapStateToProps =(state) => ({currentStudent: state.currentStudent})

export default connect(mapStateToProps)(SingleStudent)
