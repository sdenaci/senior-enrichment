import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchSingleCampus} from '../redux/CurrentCampus'
import {createCampus} from '../redux/campuses'

const allCampuses = (props) => {
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
        <li key={campus.id} onClick={props.setCurrentCampus}>{campus.name}
        <Link to={`/campuses/${campus.id}`} >
        <img src={campus.image} id={campus.id}/>
        </Link>
        </li>
        ))}
      </ul>

    </div>
  )


};


const mapStateToProps = (state) => ({campuses: state.campuses})
const mapDispatchToProps = (dispatch) => ({
  onCampusSubmit: function(event) {
    event.preventDefault()
    const newCampusInfo ={
      name: event.target.name.value,
      image: event.target.image.value
    };
    dispatch(createCampus(newCampusInfo))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(allCampuses)
