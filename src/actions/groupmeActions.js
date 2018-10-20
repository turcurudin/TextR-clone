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
