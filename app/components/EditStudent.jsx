import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios'
import {updateStudent} from '../redux/students'


function EditStudent(props) {
  return (
   <div>
    <h1>Edit dis this student's Info</h1>
       <form onSubmit={props.editStudentSubmit}>
          Name: <input name="name" type="text"/>
          Email: <input name="email" type="text"/>
          Campus: <select name="campus">
                  {props.campuses && props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name} </option>)}
                </select>
        <button>submit da right infoooo</button>
       </form>
   </div>
  )
}

const mapStateToProps = (state, ownProps) => ({students: state.students, campuses: state.campuses})
const mapDispatchToProps = (dispatch, ownProps) => ({
  editStudentSubmit: function(event) {
    event.preventDefault()
    const newStudentInfo = {}
    if (event.target.name.value.length) {
      newStudentInfo.name = event.target.name.value
    }
    if (event.target.email.value.length) {
      newStudentInfo.email = event.target.email.value
    }
    if (event.target.campus.value.length) {
      newStudentInfo.campus = event.target.campus.value
    }
    console.log(ownProps.studentId)
    dispatch(updateStudent(newStudentInfo, ownProps.studentId))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
