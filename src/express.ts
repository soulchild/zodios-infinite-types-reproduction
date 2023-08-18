import z from 'zod';
import { Method, ZodiosPathsByMethod } from '@zodios/core';
import { ZodiosRequestHandler, zodiosContext } from '@zodios/express';
import { api } from './api/index.js';

type Api = typeof api;

const ctxSchema = z.object({});
const ctx = zodiosContext(ctxSchema);
const zodiosRouter = () => ctx.router(api);

type Context = typeof ctxSchema;
type ZodiosPaths<M extends Method> = ZodiosPathsByMethod<Api, M>;

type Middleware<M extends Method, Path extends ZodiosPaths<M>> = ZodiosRequestHandler<
  Api,
  Context,
  M,
  Path
>;

export const myMiddleware =
  <M extends Method, Path extends ZodiosPaths<M>>(): Middleware<M, Path> =>
  async (req, res, done) => {
    done();
  };

zodiosRouter().get('/groups/:uuid', myMiddleware(), (req, res, done) => {
  done();
});
