import { combineReducers } from 'redux';
import { createReducer } from '../lib';
import * as GroupMeReducers from './groupmeReducer'
export default combineReducers(Object.assign({},
  GroupMeReducers
))
