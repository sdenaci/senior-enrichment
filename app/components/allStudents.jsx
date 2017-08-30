import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const allStudents = (props) => {
  return(
    <div>
      <h2> Students </h2>
      <ul>
        {props.students.map(student => (
        <li key={student.id}>
        <Link to={`students/${student.id}`}>
        {student.name}
        </Link>
        </li>
        ))}
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => ({students: state.students})

export default connect(mapStateToProps)(allStudents)
