import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios'


class SingleCampus extends Component {
  constructor() {
    super()
    this.state = {
      currentCampus: {}
    }
  }



  componentDidMount() {
    const campusId = this.props.match.params.campusId

    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(currentCampus => this.setState({currentCampus}))
  }


  render() {

  const campus = this.state.currentCampus
  const campusStudents = this.props.students.filter(student => (
    student.campusId === campus.id
  ))
  return (

    <div>
      <h1> U R AT DA SINGLE CAMPUS PAGE 4</h1>
      <h2>{campus.name}</h2>
      <h3>students at dis camperino</h3>
      <ul>
      {campusStudents.map(student => (
        <Link to={`/students/${student.id}`} key={student.id}>
        <li >{student.name}</li>
        </Link>
        ))}
      <Link to={`/campuses/${campus.id}/edit`}>
      <button>Edit stuff bout dis campus</button>
      </Link>
      </ul>
    </div>
  )
  }
}


const mapStateToProps = (state) => ({students: state.students})


export default connect(mapStateToProps)(SingleCampus)
