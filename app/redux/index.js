import {combineReducers} from 'redux';
import students from './students'
import campuses from './campuses'
import currentCampus from './currentCampus'

export default combineReducers({students, campuses, currentCampus});

export * from './students'
export * from './campuses'
export * from './currentCampus'
