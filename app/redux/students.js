import axios from 'axios'
import history from '../components/history'

//action types
const INITIALIZE = 'INITIALIZE_STUDENTS'
const CREATE = 'CREATE_STUDENT'
const UPDATE = 'UPDATE_STUDENT'
const DELETE = 'DELETE_STUDENT'


//action creators
const init = students => ({type: INITIALIZE, students})
const createANewStudent = student => ({type: CREATE, student})
const updateAStudent = student => ({type: UPDATE, student})
const deleteAStudent = student => ({type: DELETE, student})




//reducers

export default function reducer (students = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.students;

    case CREATE:
      return [...students, action.student]

    case UPDATE:
      return [...students, action.student]

    case DELETE:
      return students.filter(student => student.id !== action.student.id)
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

export const createStudent = (info) => dispatch => {
  axios.post('/api/students/', info)
    .then(res => res.data)
    .then(newStudent => {
      const action = createANewStudent(newStudent)
      dispatch(action);
    })
}

export const updateStudent = (info, studentId) => dispatch => {
  axios.put(`/api/students/${studentId}`, info)
    .then(res => history.push(`/students/${studentId}`))
}

export const deleteStudent = (studentId) => dispatch => {
  axios.delete(`api/students/${studentId}/delete`)
  .then(res => (res.data))
  .then(student => {
    const deleteAction = deleteAStudent(student)
    dispatch(deleteAction)
  })
}
