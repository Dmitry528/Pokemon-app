import { http, HttpResponse } from 'msw';

import { pokemons } from './data';
import { baseUrl } from 'shared/constants/api';

const pokemonsUrl = `${baseUrl}/pokemon`;

const handlers = [
  http.get(pokemonsUrl, () => {
    return HttpResponse.json(pokemons);
  }),
];

export { handlers };
