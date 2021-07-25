import React, { Fragment } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

export default function CatDetail() {
  const params = useParams();
  const match = useRouteMatch();
  return (
    <Fragment>
      <Route path={`/routerTry/catsArea/${params.catId}`} exact>
        <Link to={`${match.url}/comments`}>Load comments</Link>
      </Route>
      <Route path={`${match.path}/comments`}>comment...</Route>
    </Fragment>
  );
}
