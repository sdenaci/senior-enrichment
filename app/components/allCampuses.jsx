import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchSingleCampus} from '../redux/CurrentCampus'
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
          <li key={campus.id}>{campus.name}
          <Link to={`/campuses/${campus.id}`} >
          <img src={campus.image} id={campus.id}/>
          </Link>
          <button onClick={props.deleteMe} name={campus.id}>delete me if u wanna</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }


const mapStateToProps = (state) => ({campuses: state.campuses})
const mapDispatchToProps = (dispatch) => ({
  onCampusSubmit: function(event) {
    event.preventDefault()
    const newCampusInfo ={
      name: event.target.name.value,
      image: event.target.image.value
    };
    dispatch(createCampus(newCampusInfo))
  },
  deleteMe(event) {
    event.preventDefault()
    dispatch(deleteCampus(event.target.name))
  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(allCampuses))
