import { AuthSession } from 'expo';

const GROUPME_OAUTH_ENDPOINT = 'https://oauth.groupme.com/oauth/authorize?client_id=HXvgT16M7fxfqCa7pGuzEfmXmjN6WguNfFK79gJkK2KUC30U'
const GROUPME_API_ENDPOINT = "https://api.groupme.com/v3"

export function requestToken() {
  const redirectUrl = AuthSession.getRedirectUrl();
  return AuthSession.startAsync({ authUrl: GROUPME_OAUTH_ENDPOINT });
}

export function requestGroups(token, page = 1, per_page = 10) {
  return fetch( GROUPME_API_ENDPOINT + "/groups" +
  `?page=${page}` +
  `&per_page=${per_page}`, {
    headers: { "X-Access-Token" : token }
  }).then( r => {
    if(!r.ok) throw new Error("FETCH ERROR")
    return r.json()
  }).then( r => r.response )
}
