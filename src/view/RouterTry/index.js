import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Typography, Menu } from 'antd';
import CatsArea from '../../components/CatsArea';
import CatDetail from '../../components/CatDetail';
import DogArea from '../../components/DogArea';

export default function RouterTry() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Typography.Title level={3}> RouterTry</Typography.Title>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          {/* <Link to="/routerTry/catsArea">Cats</Link> */}
          <Link to={`${match.path}/catsArea`}>Cats</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to={`${match.path}/dogArea`}>Dogs</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route path="/routerTry/catsArea" exact>
          <CatsArea />
        </Route>
        <Route path="/routerTry/catsArea/:catId">
          <CatDetail />
        </Route>

        <Route path="/routerTry/dogArea">
          <DogArea />
        </Route>
      </Switch>
    </div>
  );
}
