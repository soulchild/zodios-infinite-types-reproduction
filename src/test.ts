import { Zodios, mergeApis } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';

import { usersApi } from './api/users.js';
import { organizationsApi } from './api/organizations.js';
import { groupsApi } from './api/groups.js';

export const api = mergeApis({
  '/users': usersApi,
  '/organizations': organizationsApi,
  '/groups': groupsApi,
});

const zodiosInstance = new Zodios('http://localhost:3000/api/v1', api);
const zodios = new ZodiosHooks('API', zodiosInstance);

zodios.getKeyByAlias('user', { params: { uuid: '123' } });
