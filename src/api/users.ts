import { makeApi } from '@zodios/core';
import { z } from 'zod';
import { uuidParam } from './parameters.js';

export const usersApi = makeApi([
  {
    method: 'get',
    path: '/',
    alias: 'searchUsers',
    response: z.array(z.string()),
  },
  {
    method: 'delete',
    path: '/',
    alias: 'bulkDeleteUsers',
    response: z.object({}),
  },
  {
    method: 'put',
    path: '/audit',
    alias: 'bulkAuditUsers',
    response: z.object({}),
  },
  {
    method: 'post',
    path: '/',
    alias: 'createUser',
    response: z.string(),
  },
  {
    method: 'get',
    path: '/:uuid',
    parameters: uuidParam,
    response: z.object({}),
    alias: 'user',
  },
]);
