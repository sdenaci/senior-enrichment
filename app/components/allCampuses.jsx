import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchSingleCampus} from '../redux/CurrentCampus'
import {fetchCampuses, createCampus} from '../redux/campuses'

class allCampuses extends Component{

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return(
      <div>
        <h2> Campuses </h2>
        <form onSubmit={this.props.onCampusSubmit}>
          Name: <input name="name" type="text"/>
          Image: <input name="image" type="text"/>
          <button>Add Campus</button>
        </form>
        <ul>
          {this.props.campuses.map(campus => (
          <li key={campus.id}>{campus.name}
          <Link to={`/campuses/${campus.id}`} >
          <img src={campus.image} id={campus.id}/>
          </Link>
          <button>delete me if u wanna</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
};


const mapStateToProps = (state) => ({campuses: state.campuses})
const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
  },
  onCampusSubmit: function(event) {
    event.preventDefault()
    const newCampusInfo ={
      name: event.target.name.value,
      image: event.target.image.value
    };
    dispatch(createCampus(newCampusInfo))
  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(allCampuses))
