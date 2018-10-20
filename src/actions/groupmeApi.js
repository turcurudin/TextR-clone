import { AuthSession } from 'expo';

const GROUPME_OAUTH_ENDPOINT = 'https://oauth.groupme.com/oauth/authorize?client_id=HXvgT16M7fxfqCa7pGuzEfmXmjN6WguNfFK79gJkK2KUC30U'
const GROUPME_API_ENDPOINT = "https://api.groupme.com/v3"

const getJson = r => {
  if(!r.ok) throw new Error("FETCH ERROR")
  return r.json()
}

export function requestToken() {
  const redirectUrl = AuthSession.getRedirectUrl();
  return AuthSession.startAsync({ authUrl: GROUPME_OAUTH_ENDPOINT });
}

export function requestGroups(token, page = 1, per_page = 10) {
  return fetch( GROUPME_API_ENDPOINT + "/groups" +
  `?page=${page}` +
  `&per_page=${per_page}`, {
    headers: { "X-Access-Token" : token }
  }).then(getJson).then( r => r.response )
}

export function requestChats(token, page = 1, per_page = 10) {
  return fetch(GROUPME_API_ENDPOINT + "/chats" +
    `?page=${page}` +
    `&per_page=${per_page}`, {
      headers: { "X-Access-Token" : token }
    }).then(getJson).then( r => r.response )
}

export function requestGroupMessages(token, { before_id, group_id, after_id, limit = 100} ) {

  return fetch( GROUPME_API_ENDPOINT + `/groups/${group_id}/messages` +
    `?limit=${limit}`
    // + before_id?`&before_id=${before_id}`:"" +
    // after_id?`&after_id=${after_id}`:""
    , {
    headers: { "X-Access-Token" : token }
  }).then(getJson).then(x => x.response)
}

export function postMessageToGroup(token, { text, group_id, uuid }) {
  return fetch( GROUPME_API_ENDPOINT + `/groups/${group_id}/messages` , {
    method:"POST",
    headers: { "X-Access-Token" : token },
    body: JSON.stringify({
      text,
      source_guid: uuid
    })
  })
}
