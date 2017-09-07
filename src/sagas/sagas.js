import { takeEvery, fork } from 'redux-saga/effects';

import { FETCH_ALL_CONTACTS } from '../actions';

function* getAllContacts(action) {
  console.log(' triggering saga action ', action);
}

function* watchGetlAllContacts() {
  console.log(' watching get all contacts saga ');
  yield takeEvery(FETCH_ALL_CONTACTS, getAllContacts);
}

/*
 Alternatively you may use takeLatest.
 
 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
function* mySaga() {
  yield fork(watchGetlAllContacts);
}

export default mySaga;
