
import axios from 'axios'
import history from '../components/history'

//action types
const UPDATE = 'UPDATE_CURRENT'


//action creators
export const updateCurrent = currentStudent => ({type: UPDATE, currentStudent})




//reducers

export default function reducer (currentStudent ={}, action) {

  switch(action.type) {

    case UPDATE:
      return action.currentStudent

    default:
      return currentStudent
  }

}

//thunk creators

export const fetchStudent = (studentId) => dispatch => {
  axios.get(`api/students/${studentid}`)
    .then(res => {
      console.log(res.data)
      dispatch(updateCurrent(res.data))
    })

}
