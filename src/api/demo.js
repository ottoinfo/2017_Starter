import { request } from '_redux/utils';
import config from '../config';

export function getUsers() {
  return request(`${config.API_BASE_URI}/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(([ body ]) => body);
}
