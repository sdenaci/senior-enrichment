import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios'
import {updateCampus} from '../redux/campuses'


function EditCampus(props) {
  return (
    <div>
      <h1>Edit dis Campus Info</h1>
         <form onSubmit={props.editCampusSubmit}>
          Name: <input name="name" type="text"/>
          Image: <input name="image" type="text"/>
          <button>Edit Campus</button>
         </form>
     </div>
  )

}

const mapStateToProps = (state) => ({campuses: state.campuses})
const mapDispatchToProps = (dispatch, ownProps) => ({
  editCampusSubmit: function(event) {
    event.preventDefault()
    const updatedCampusInfo = {
      name: event.target.name.value,
      image: event.target.image.value
    };
    dispatch(updateCampus(updatedCampusInfo, ownProps.match.params.campusId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)
