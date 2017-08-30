import React from 'react'
import {connect} from 'react-redux'


function SingleCampus(props) {
  return (
    <div>
      <h1> U R AT A SINGLE CAMPUS</h1>
      <h2>{props.currentCampus.name}</h2>
    </div>
  )
}


const mapStateToProps = (state) => ({currentCampus: state.currentCampus})


export default connect(mapStateToProps)(SingleCampus)
