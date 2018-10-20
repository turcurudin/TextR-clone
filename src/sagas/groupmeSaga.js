import { takeLatest, call, put } from "redux-saga/effects";
import {groupmeApi} from '../actions';
import { types } from "../actions";

export function* watcherSaga() {
  yield takeLatest(types.GROUPME_LOGIN_REQUESTED, loginSaga);
  yield takeLatest(types.GROUPME_GROUPS_REQUESTED, groupsRequestSaga)
  yield takeLatest(types.GROUPME_MESSAGES_REQUESTED, groupMessagesRequestSaga)
  yield takeLatest(types.GROUPME_CHATS_REQUESTED, chatsRequestSaga)
}

function* loginSaga() {
  try {
    const response = yield call(groupmeApi.requestToken);
    if(response.type !== "success") throw new Error("OAUTH ERROR");
    yield put({ type:types.GROUPME_LOGIN_SUCCESS, payload:{ ...response.params } });
  } catch (error) {
    yield put({ type: types.GROUPME_API_FAILED, error });
  }
}

function* groupsRequestSaga({payload: { token, page, per_page }}) {
  try {
    const response = yield call(groupmeApi.requestGroups, token, page, per_page)
    yield put({ type:types.GROUPME_GROUPS_SUCCESS, payload:response })
  } catch (error) {
    yield put({ type: types.GROUPME_API_FAILED, error });
  }
}

function* chatsRequestSaga({ payload: { token, page, per_page }}) {
  try {
    const response = yield call(groupmeApi.requestChats, token, page, per_page)
    yield put({ type: types.GROUPME_CHATS_SUCCESS, payload: response})
  } catch(error) {
    yield put({ type: types.GROUPME_API_FAILED, error });
  }
}

function* groupMessagesRequestSaga({ payload: { type, id, token, group_id, before_id = undefined, after_id=undefined, limit = undefined }}) {
  try {
    let response;
    if(type ==="group") {
      response = yield call(groupmeApi.requestGroupMessages, token, { group_id, before_id, after_id, limit })
    } else if(type ==="chat") {
      response = yield call(groupmeApi.requestChatMessages, token, { id, before_id, after_id })
    }
    yield put({ type:types.GROUPME_MESSAGES_SUCCESS, payload:response })
  } catch(error) {
    yield put({ type: types.GROUPME_API_FAILED, error });
  }
}
