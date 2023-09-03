import { get, SHIPS_LIST_URL } from './api';
import { ShipsModel } from './models/ship.model';

export const fetchShips = (setShips: any) => {
  get(SHIPS_LIST_URL)
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
