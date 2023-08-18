import { makeApi } from '@zodios/core';
import { z } from 'zod';
import { uuidParam } from './parameters.js';

export const organizationsApi = makeApi([
  {
    method: 'get',
    path: '/',
    alias: 'organizations',
    response: z.object({}),
  },
  {
    method: 'get',
    path: '/:uuid',
    parameters: uuidParam,
    response: z.object({}),
    alias: 'organization',
  },
  {
    method: 'get',
    path: '/:uuid/users',
    parameters: uuidParam,
    response: z.object({}),
    alias: 'organizationUsers',
  },
  {
    method: 'get',
    path: '/:uuid/export',
    parameters: uuidParam,
    response: z.object({}),
    alias: 'exportOrganizationUsers',
  },
  {
    method: 'get',
    path: '/:uuid/permissions',
    parameters: uuidParam,
    response: z.object({}),
    alias: 'organizationPermissions',
  },
]);
