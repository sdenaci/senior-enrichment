import axios from 'axios'

//action types
const INITIALIZE = 'INITIALIZE_STUDENTS'


//action creators
const init = students => ({type: INITIALIZE, students})



//reducers

export default function reducer (students = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.students;
    default:
      return students
  }

}

//thunk creators

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => {
      dispatch(init(res.data))
    })
    .catch(err => console.error('Fetching students unsuccessful', err));
};
