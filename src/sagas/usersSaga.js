import { put, takeEvery, call } from "redux-saga/effects";

function* fetchUsers() {
  const response = yield call(fetch, "http://localhost:3002/users");

  const json = yield call([response, "json"]);

  yield put({ type: "GET_USERS_SUCCEEDED", response: json });
}

export default function* watchFetchUsers() {
  yield takeEvery("GET_CHANNELS", fetchUsers);
}
