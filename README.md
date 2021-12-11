# gallium

gallium is the svelte template, extended with fastify for backend capabilites.

It also has eslint and nodemon setup for a better developer experience.

NOTE: gallium is **not** a js framework, it is svelte and fastify and does not have any special features.

NOTE 2: You may be required to patch rollup for gallium to work by adding 
```md
"./dist/loadConfigFile": "./dist/loadConfigFile.js"
``` 
to the exports object inside `node_modules/rollup/package.json`.
