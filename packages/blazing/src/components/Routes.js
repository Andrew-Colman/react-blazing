import { Suspense, lazy } from 'react';

import { Switch, Link, Route } from 'wouter';

import Loading from './Loading';

const HomePage = lazy(() => import('@pages/home'));

export default function Routes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/docs">docs page</Route>
          <Route path="/users/:user">{params => `${params.user}`}</Route>
          <Route path="/:rest*">
            {params => `404, Sorry the page ${params.rest} does not exist!`}
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
