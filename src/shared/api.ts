export const API_URL = 'https://ships.sherstneva.cz/data.json';

export const get = async (url: string, data = {}) => {
  return fetch(url, { method: 'GET', ...data });
};
