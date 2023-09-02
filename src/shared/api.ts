export const API_URL = 'https://ships.sherstneva.cz';
export const SHIPS_LIST_URL = `${API_URL}/data.json`;

export const get = async (url: string, data = {}) => {
  return fetch(url, { method: 'GET', ...data });
};
