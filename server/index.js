import koa from 'koa';
import onerror from 'koa-onerror';
import middleware from './middleware';
import api from './api';

const router = require('koa-router')();

const app = new koa();

app.use(middleware());
onerror(app);

app.use(api());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.listen(8899);
console.log('listening...')

export default app;
