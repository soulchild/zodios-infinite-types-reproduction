import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';

import { api } from './api/index.js';

const zodiosInstance = new Zodios('http://localhost:3000/api/v1', api);
const zodios = new ZodiosHooks('API', zodiosInstance);

zodios.getKeyByAlias('user', { params: { uuid: '123' } });
