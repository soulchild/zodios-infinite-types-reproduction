# Reproduction

Reproduce with `npx tsc --noEmit` which gives:

```
src/test.ts:17:30 - error TS2589: Type instantiation is excessively deep and possibly infinite.

17 zodios.getKeyByAlias('user', { params: { uuid: '123' } });
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in src/test.ts:17
```
