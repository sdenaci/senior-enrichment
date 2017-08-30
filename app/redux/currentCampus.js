import axios from 'axios'

//action types
const UPDATE = 'UPDATE_CURRENT_USER'


//action creators
const update = currentCampus => ({type: UPDATE, currentCampus})



//reducers

export default function reducer (currentCampus = {}, action) {

  switch(action.type) {

    case UPDATE:
      return action.currentCampus

    default:
      return currentCampus
  }

}

//thunk creators


export const fetchSingleCampus = (id) => dispatch => {
  axios.get(`/api/campuses/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('I could not find your user', err))
}
