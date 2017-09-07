import { List, Map } from 'immutable';

import { FETCH_ALL_CONTACTS } from '../actions';

const initialState = Map({
  allContacts: List(),
});

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CONTACTS:
      console.log(' success ', action.payload);
      return state;
    default:
      return state;
  }
}
