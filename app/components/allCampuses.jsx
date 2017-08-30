import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const allCampuses = (props) => {
  return(
    <div>
      <h2> Campuses </h2>
      <ul>
        {props.campuses.map(campus => (
        <li key={campus.id}>{campus.name}
        <Link to={`/campuses/${campus.id}`}>
        <img src={campus.image} />
        </Link>

        </li>
        ))}
      </ul>
    </div>
  )


}

const mapStateToProps = (state) => ({campuses: state.campuses})



export default connect(mapStateToProps)(allCampuses)
