import Router from 'koa-router';
import koaStatic from 'koa-static';
import debug from 'debug';

import renderApp from './middleware/SSR-react-app';
import { DIST } from '../config/paths';

const log = debug('cs:router');
export const router = new Router();

const staticRoute = koaStatic(DIST);
staticRoute._name = 'koaStatic /dist'; // eslint-disable-line no-underscore-dangle

export function setRoutes(assets) {
  log('adding react routes');

  router.get('/api/creditReport', async (ctx) => {
    try {
      const results = await fetch('https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json')
        .then(response => response.json())
        .then(json => {
          return json;
        });
      ctx.body = {
        status: 'success',
        data: results
      };
    } catch (err) {
      console.log(err)
    }
  })

  router
    .use(staticRoute)
    .get('/(.*)', renderApp(assets));
}
