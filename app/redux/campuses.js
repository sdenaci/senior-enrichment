import axios from 'axios'
import history from '../components/history'
//action types
const INITIALIZE = 'INITIALIZE_CAMPUSES'
const CREATE = 'CREATE_CAMPUS'



//action creators
const init = campuses => ({type: INITIALIZE, campuses})
const createANewCampus = campus => ({type: CREATE, campus})



//reducers

export default function reducer (campuses = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.campuses;

    case CREATE:
      return [...campuses, action.campus]

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
      .then(history.push('/campuses'))
    }


