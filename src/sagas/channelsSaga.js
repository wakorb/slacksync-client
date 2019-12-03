import { put, takeEvery, call } from "redux-saga/effects";

function* fetchChannels() {
  const response = yield call(fetch, "http://localhost:3002/channels");

  const json = yield call([response, "json"]);

  yield put({ type: "GET_CHANNELS_SUCCEEDED", response: json });
}

export default function* watchFetchChannels() {
  yield takeEvery("GET_CHANNELS", fetchChannels);
}
