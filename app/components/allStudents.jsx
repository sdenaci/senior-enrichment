import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {createStudent, fetchStudents, deleteStudent} from '../redux/students'

function allStudents(props) {


    return(

      <div>

        <h2> Students </h2>
        <form onSubmit={props.onStudentSubmit}>
          Name: <input name="name" type="text"/>
          Email: <input name="email" type="text"/>
          Campus: <select name="campus">
                    {props.campuses && props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name} </option>)}
                  </select>
          <button>Add Student</button>
        </form>
        <ul>
          {props.students && props.students.map(student => (
          <li key={student.id}>
          <Link to={`/students/${student.id}`}>
          {student.name}
          </Link>
          <button onClick={props.deleteMe} name={student.id}>delete me if u wanna</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }


const mapStateToProps = (state) => ({students: state.students, campuses: state.campuses})
const mapDispatchToProps = (dispatch) => ({

  onStudentSubmit(event) {
    event.preventDefault();
    const newStudentInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campus.value
    }
    dispatch(createStudent(newStudentInfo))
  },
  deleteMe(event) {
    event.preventDefault()
    dispatch(deleteStudent(event.target.name))
  }


})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(allStudents))
