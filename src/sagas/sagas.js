import { takeEvery, fork, put, all } from 'redux-saga/effects';

import * as ContactsAPI from '../ContactsAPI';
import {
  FETCH_ALL_CONTACTS,
  FETCH_ALL_CONTACTS_SUCCESS,
  FETCH_ALL_CONTACTS_FAILED,
} from '../actions';

export function* getAllContacts() {
  const contacts = yield ContactsAPI.getAll();
  try {
    yield put({ type: FETCH_ALL_CONTACTS_SUCCESS, payload: contacts });
  } catch (e) {
    yield put({ type: FETCH_ALL_CONTACTS_FAILED, message: e.message });
  }
}

export function* watchGetlAllContacts() {
  yield takeEvery(FETCH_ALL_CONTACTS, getAllContacts);
}

function* mySaga() {
  yield all([fork(watchGetlAllContacts)]);
}

export default mySaga;
