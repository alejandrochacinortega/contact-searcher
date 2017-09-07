const api = 'http://localhost:3000';

export const getAll = () => {
  return fetch(`${api}/contacts`).then(res => res.json()).then(data => data);
};
