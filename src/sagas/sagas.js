import { takeEvery, fork, put } from 'redux-saga/effects';

import * as ContactsAPI from '../ContactsAPI';
import {
  FETCH_ALL_CONTACTS,
  FETCH_ALL_CONTACTS_SUCCESS,
  FETCH_ALL_CONTACTS_FAILED,
} from '../actions';

function* getAllContacts() {
  const contacts = yield ContactsAPI.getAll();
  try {
    yield put({ type: FETCH_ALL_CONTACTS_SUCCESS, payload: contacts });
  } catch (e) {
    yield put({ type: FETCH_ALL_CONTACTS_FAILED, message: e.message });
  }
}

function* watchGetlAllContacts() {
  yield takeEvery(FETCH_ALL_CONTACTS, getAllContacts);
}

function* mySaga() {
  yield fork(watchGetlAllContacts);
}

export default mySaga;
