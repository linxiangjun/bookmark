import Router from 'koa-router';
import convert from 'koa-convert';
import requireDir from 'require-dir';
const routes = requireDir('./routes');

export default function api() {
  const router = new Router();
  Object.keys(routes).forEach(name => {
    return routes[name]['default'](router);
  });
  return convert.compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
