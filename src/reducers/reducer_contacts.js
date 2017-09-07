import { List, Map } from 'immutable';

import {
  FETCH_ALL_CONTACTS_SUCCESS,
  FETCH_ALL_CONTACTS_FAILED,
} from '../actions';

const initialState = Map({
  allContacts: List(),
});

export default function(state = initialState, action) {
  console.log(' action.type ', action);
  switch (action.type) {
    case FETCH_ALL_CONTACTS_SUCCESS:
      console.log(' success YES ', action.payload);
      return state;
    default:
      return state;
  }
}
