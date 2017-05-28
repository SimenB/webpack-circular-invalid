# https://github.com/webpack/webpack/issues/4940

1. `npm install` (should use npm@5 to get same versions of all deps)
1. `npm run webpack && npm run browserify`
1. `node index.js` successfully prints
1. `node browserify.js` successfully prints
1. `node webpack.js` fails on syntax error
