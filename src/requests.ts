import { API_URL, get } from './shared/api';
import { ShipsModel } from './models/ship-model';

export const fetchShips = (setShips: any) => {
  get(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to get ships list');
      }
    })
    .then((result: ShipsModel) => {
      setShips(result.ships);
    })
    .catch(console.log);
};
