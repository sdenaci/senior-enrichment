import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStudent} from '../redux/students'

const allStudents = (props) => {
  return(
    <div>
      <h2> Students </h2>
      <form onSubmit={props.onStudentSubmit}>
        Name: <input name="name" type="text"/>
        Email: <input name="email" type="text"/>
        Campus: <input name="campus" type="text"/>
        <button>Add Student</button>
      </form>
      <ul>
        {props.students.map(student => (
        <li key={student.id}>
        <Link to={`/students/${student.id}`}>
        {student.name}
        </Link>
        </li>
        ))}
      </ul>
    </div>
  )

}


const mapStateToProps = (state) => ({students: state.students})
const mapDispatchToProps = (dispatch) => ({
  onStudentSubmit(event) {
    event.preventDefault();
    const newStudentInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
    };
    dispatch(createStudent(newStudentInfo))
  }


})

export default connect(mapStateToProps, mapDispatchToProps)(allStudents)
