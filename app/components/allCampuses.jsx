import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchCampuses, createCampus, deleteCampus} from '../redux/campuses'

function allCampuses(props) {

    return(
      <div>
        <h2> Campuses </h2>
        <form onSubmit={props.onCampusSubmit}>
          Name: <input name="name" type="text"/>
          Image: <input name="image" type="text"/>
          <button>Add Campus</button>
        </form>
          <ul>
          {props.campuses.map(campus => (
          <Link to={`/campuses/${campus.id}`} key={campus.id}>
          <li >{campus.name}
          <img src={campus.image} id={campus.id}/>
          <button onClick={props.deleteMe} name={campus.id}>delete me if u wanna</button>
          </li>
          </Link>
          ))}
        </ul>
      </div>
    )
  }


const mapStateToProps = (state) => ({campuses: state.campuses, students: state.students})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onCampusSubmit: function(event) {
    event.preventDefault()
    const newCampusInfo ={
      name: event.target.name.value,
    };
    if (event.target.image.value) {
      newCampusInfo.image = event.target.image.value
    } else {
      newCampusInfo.image = 'http://www.fillmurray.com/300/300'
    }
    dispatch(createCampus(newCampusInfo))

  },
  deleteMe(event) {
    event.preventDefault()
    console.log(event.target.value)
    dispatch(deleteCampus(event.target.name))

  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(allCampuses))
