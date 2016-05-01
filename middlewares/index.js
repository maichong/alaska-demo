
export default function (router) {
  router.use(async function (ctx, next) {
    let start = Date.now();
    await next();
    console.log('Elapsed time %s ms.', Date.now() - start);
  });
}
