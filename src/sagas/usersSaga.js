import { put, takeLatest, all, call, take } from "redux-saga/effects";

import { END, eventChannel } from "redux-saga";

const createSSEChannel = uri => {
  return eventChannel(emit => {
    const sseSource = new EventSource(uri);

    sseSource.onmessage = event => {
      emit(event.data);
    };

    sseSource.onerror = event => {
      emit(END);
    };

    return () => {
      sseSource.close();
    };
  });
};

function* fetchUsersSSE() {
  const channel = yield call(createSSEChannel, "http://localhost:3002/users");

  while (true) {
    try {
      // An error from socketChannel will cause the saga jump to the catch block
      const response = yield take(channel);
      yield put({ type: "GET_USERS_SUCCEEDED", response });
    } catch (err) {
      console.error("socket error:", err);
    }
  }
}

function* actionWatcher() {
  yield takeLatest("GET_USERS", fetchUsersSSE);
}

export default function* usersSaga() {
  yield all([actionWatcher()]);
}
