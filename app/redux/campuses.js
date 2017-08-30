import axios from 'axios'

//action types
const INITIALIZE = 'INITIALIZE_CAMPUSES'


//action creators
const init = campuses => ({type: INITIALIZE, campuses})



//reducers

export default function reducer (campuses = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.campuses;
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

