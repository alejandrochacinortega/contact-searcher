export const FETCH_ALL_CONTACTS = 'FETCH_ALL_CONTACTS';
export const FETCH_ALL_CONTACTS_SUCCESS = 'FETCH_ALL_CONTACTS_SUCCESS';
export const FETCH_ALL_CONTACTS_FAILED = 'FETCH_ALL_CONTACTS_FAILED';

export function fetchAllContacts() {
  return {
    type: FETCH_ALL_CONTACTS,
  };
}
