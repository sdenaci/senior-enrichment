import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios'
import {updateStudent} from '../redux/students'


function EditStudent(props) {
  return (
   <div>
    <h1>Edit dis Student Info</h1>
       <form onSubmit={props.editStudentSubmit}>
          Name: <input name="name" type="text"/>
          Email: <input name="email" type="text"/>
          Campus: <input name="campus" type="text"/>
        <button>Edit Student</button>
       </form>
   </div>
  )
}

const mapStateToProps = (state) => ({students: state.students})
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
    dispatch(updateStudent(newStudentInfo, ownProps.match.params.studentId))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
