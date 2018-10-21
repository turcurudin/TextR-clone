import * as types from './types'

export function requestToken() {
  return { type: types.GROUPME_LOGIN_REQUESTED }
}

export function requestUser(token) {
  return { type: types.GROUPME_USER_REQUESTED, payload:{ token } }
}

export function requestGroups(token, page, per_page) {
  return { type: types.GROUPME_GROUPS_REQUESTED, payload:{
    token,
    page,
    per_page,
  } }
}

export function requestChats(token, page, per_page) {
  return { type: types.GROUPME_CHATS_REQUESTED, payload:{
    token,
    page,
    per_page,
  } }
}

export function requestMessages(token, { type = "group", id, before_id = undefined, after_id = undefined, limit = undefined }) {
  return { type: types.GROUPME_MESSAGES_REQUESTED, payload: {
    token, group_id:id, id, before_id, after_id, limit, type
  } }
}

export function postGroupMessage(token, { group_id, text }) {
  return {
    type:types.GROUPME_GROUP_MESSAGE_POST_REQUESTED, payload: {
      token, group_id, text
    }
  }
}
