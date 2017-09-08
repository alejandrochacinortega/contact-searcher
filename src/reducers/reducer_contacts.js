import { List, Map, fromJS } from 'immutable';

import { FETCH_ALL_CONTACTS_SUCCESS } from '../actions';

const initialState = Map({
  allContacts: List(),
});

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CONTACTS_SUCCESS:
      return state.setIn(['allContacts'], fromJS(action.payload));
    default:
      return state;
  }
}
