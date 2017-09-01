import {combineReducers} from 'redux';
import students from './students'
import campuses from './campuses'
import currentStudent from './currentStudent'

export default combineReducers({students, campuses});

export * from './students'
export * from './campuses'
export * from './currentStudent'
