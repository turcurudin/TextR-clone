import { bindActionCreators } from 'redux'
import ActionCreators from '../actions';

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}
