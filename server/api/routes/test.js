export default async (router) => {
  router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
  });

  router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
  });
};
