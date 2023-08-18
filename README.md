# Reproduction

Reproduce with `npx tsc --noEmit` which gives:

```
src/express.ts:37:37 - error TS2589: Type instantiation is excessively deep and possibly infinite.

37 zodiosRouter().get('/groups/:uuid', myMiddleware(), (req, res, done) => {
                                       ~~~~~~~~~~~~~~

src/react.ts:17:30 - error TS2589: Type instantiation is excessively deep and possibly infinite.

17 zodios.getKeyByAlias('user', { params: { uuid: '123' } });
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 2 errors in 2 files.
```
