import { mergeApis } from '@zodios/core';

import { usersApi } from './users.js';
import { organizationsApi } from './organizations.js';
import { groupsApi } from './groups.js';

export const api = mergeApis({
  '/users': usersApi,
  '/organizations': organizationsApi,
  '/groups': groupsApi,
});
