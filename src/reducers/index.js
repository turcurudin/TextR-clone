import { combineReducers } from 'redux';
import { createReducer } from '../lib';

export default combineReducers(Object.assign({},
  { hi: () => "hello_world" }
))
