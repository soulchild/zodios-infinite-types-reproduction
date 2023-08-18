import { z } from 'zod';
import { makeApi } from '@zodios/core';
import { uuidParam } from './parameters.js';

export const groupsApi = makeApi([
  {
    method: 'get',
    path: '/:uuid',
    alias: 'group',
    parameters: uuidParam,
    response: z.object({}),
  },
  {
    method: 'post',
    path: '/',
    alias: 'createGroup',
    response: z.object({}),
  },
  {
    method: 'put',
    path: '/:uuid',
    alias: 'updateGroup',
    parameters: uuidParam,
    response: z.object({}),
  },
  {
    method: 'delete',
    path: '/:uuid',
    alias: 'deleteGroup',
    parameters: uuidParam,
    response: z.object({}),
  },
  {
    method: 'get',
    path: '/:uuid/members',
    alias: 'groupMembers',
    parameters: uuidParam,
    response: z.array(z.string()),
  },
  {
    method: 'put',
    path: '/:uuid/members',
    alias: 'addGroupMember',
    parameters: uuidParam,
    response: z.object({}),
  },
  {
    method: 'delete',
    path: '/:uuid/members',
    alias: 'deleteGroupMember',
    parameters: uuidParam,
    response: z.object({}),
  },
]);
