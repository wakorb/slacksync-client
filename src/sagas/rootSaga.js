import { all } from "redux-saga/effects";
import watchFetchUsers from "./usersSaga";
import watchFetchChannels from "./channelsSaga";

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchChannels()]);
}
