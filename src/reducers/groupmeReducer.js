import { createReducer } from '../lib';
import { types } from '../actions';

export const groupme_token = createReducer({ access_token: null, }, {
  [types.GROUPME_LOGIN_SUCCESS]: (state, action) => action.payload
})

export const chat_groups = createReducer([], {
  [types.GROUPME_GROUPS_SUCCESS]: (state, action) => {
    // TODO: figure out if we're paginating or getting for first time
    return action.payload
  }
})

export const messages = createReducer({ count: null, messages:[] }, {
  [types.GROUPME_MESSAGES_SUCCESS]: (state, action) => {
    return action.payload
  }
})
