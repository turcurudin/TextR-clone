import * as types from './types'

export function requestToken() {
  return { type: types.GROUPME_LOGIN_REQUESTED }
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

export function requestMessages(token, { group_id, before_id = undefined, after_id = undefined, limit = undefined }) {
  return { type: types.GROUPME_MESSAGES_REQUESTED, payload: {
    token, group_id, before_id, after_id, limit
  } }
}

export function postGroupMessage(token, { group_id, text }) {
  return {
    type:types.GROUPME_GROUP_MESSAGE_POST_REQUESTED, payload: {
      token, group_id, text
    }
  }
}