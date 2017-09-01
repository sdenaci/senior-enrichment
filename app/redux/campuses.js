import axios from 'axios'
import history from '../components/history'
import {deleteStudents} from './students'
//action types
const INITIALIZE = 'INITIALIZE_CAMPUSES'
const CREATE = 'CREATE_CAMPUS'
const UPDATE = 'UPDATE_CAMPUS'
const DELETE = 'DELETE_CAMPUS'



//action creators
const init = campuses => ({type: INITIALIZE, campuses})
const createANewCampus = campus => ({type: CREATE, campus})
const updateACampus = campus => ({type: UPDATE, campus})
const deleteACampus = campus => ({type: DELETE, campus})



//reducers

export default function reducer (campuses = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.campuses;

    case CREATE:
      return [...campuses, action.campus];

    case UPDATE:
      return [...campuses, action.campus];

    case DELETE:
      return campuses.filter(campus => campus.id !== action.campus.id)

    default:
      return campuses
  }

}

//thunk creators

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => {
      dispatch(init(res.data))
    })
    .catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const createCampus = (info) => dispatch => {
  axios.post('/api/campuses/', info)
    .then(res => res.data)
    .then(newCampus => {
      const action = createANewCampus(newCampus)
      dispatch(action)
    })
  }

  export const updateCampus = (info, campusId) => dispatch => {
    axios.put(`/api/campuses/${campusId}`, info)
      .then(res => history.push(`campuses/${campusId}`))
    }

  export const deleteCampus = (campusId) => dispatch => {axios.delete(`api/campuses/${campusId}/delete`)
    .then(res => (res.data))
    .then(campus => {
      const deleteAction = deleteACampus(campus)
      dispatch(deleteAction)
      dispatch(deleteStudents(campusId))
    })
  }


