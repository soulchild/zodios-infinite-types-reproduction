import { makeParameters } from '@zodios/core';
import { z } from 'zod';

export const uuidParam = makeParameters([
  {
    type: 'Path',
    name: 'uuid',
    schema: z.string().uuid(),
  },
]);
