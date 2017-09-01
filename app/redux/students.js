import axios from 'axios'
import history from '../components/history'
import updateCurrent from './currentStudent'

//action types
const INITIALIZE = 'INITIALIZE_STUDENTS'
const CREATE = 'CREATE_STUDENT'
const UPDATE = 'UPDATE_STUDENT'
const DELETE = 'DELETE_STUDENT'
const DELETE_MULT = 'DELETE_MULTIPLE_STUDENTS'


//action creators
const init = students => ({type: INITIALIZE, students})
const createANewStudent = student => ({type: CREATE, student})
const updateAStudent = student => ({type: UPDATE, student})
const deleteAStudent = student => ({type: DELETE, student})
export const deleteStudents = campusId => ({type: DELETE_MULT, campusId})




//reducers

export default function reducer (students = [], action) {

  switch(action.type) {

    case INITIALIZE:
      return action.students;

    case CREATE:
      return [...students, action.student]

    case UPDATE:
      const filtered = students.filter(student => student.id !== action.student.id)
      return [...filtered, action.student]

    case DELETE:
      return students.filter(student => student.id !== action.student.id)

    case DELETE_MULT:
      return students.filter(student => +student.campusId !== +action.campusId)

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
    .then(res => res.data)
    .then(updatedInfo => {
      const updateAction = updateAStudent(updatedInfo)
      dispatch(updateAction)

    })
}

export const deleteStudent = (studentId) => dispatch => {
  axios.delete(`api/students/${studentId}/delete`)
  .then(res => (res.data))
  .then(student => {
    const deleteAction = deleteAStudent(student)
    dispatch(deleteAction)
  })
}
