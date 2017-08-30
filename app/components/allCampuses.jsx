import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const allCampuses = (props) => {
  return(
    <div>
      <h2> Campuses </h2>
      <ul>
      {props.campuses.length > 0 ? props.campuses.map(campus => (
        <li key={campus.id}>{campus.name} <img src={campus.image} /> </li>
        )) : <h1>no campuses here, u nerdo</h1>}
      </ul>
    </div>
  )


}

const mapStateToProps = (state) => ({campuses: state.campuses})



export default connect(mapStateToProps)(allCampuses)
