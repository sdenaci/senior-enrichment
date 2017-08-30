import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchSingleCampus} from '../redux/CurrentCampus'

const allCampuses = (props) => {
  return(
    <div>
      <h2> Campuses </h2>
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
  setCurrentCampus: function(evt) {
    evt.preventDefault()
    dispatch(fetchSingleCampus(evt.target.id))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(allCampuses)
