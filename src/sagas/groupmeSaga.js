import { takeLatest, call, put } from "redux-saga/effects";
import {groupmeApi} from '../actions';
import { types } from "../actions";

export function* watcherSaga() {
  yield takeLatest(types.GROUPME_LOGIN_REQUESTED, loginSaga);
  yield takeLatest(types.GROUPME_GROUPS_REQUESTED, groupsRequestSaga)
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
