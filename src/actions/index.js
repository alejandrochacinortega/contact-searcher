export const FETCH_ALL_CONTACTS = 'FETCH_ALL_CONTACTS';
export const FETCH_ALL_CONTACTS_SUCCESS = 'FETCH_ALL_CONTACTS_SUCCESS';

export const test = 'test';

export function fetchAllContacts(query, callback) {
  return {
    type: FETCH_ALL_CONTACTS,
    query,
    callback,
  };
}
