import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';

import Loader from './components/Loader';
import MainLayout from './containers/MainLayout';
import NotFoundPage from './pages/404';

const loadable = (loader) =>
  Loadable({
    loader,
    loading: () => <Loader />,
    delay: 300,
  });

const routes = [
  {
    path: '/',
    component: loadable(() => import('./pages')),
    exact: true,
  },
  {
    path: '/resume',
    component: loadable(() => import('./pages/resume')),
    exact: true,
  },
  {
    path: '/projects',
    component: loadable(() => import('./pages/projects')),
    exact: true,
  },
  {
    path: '/blog',
    component: loadable(() => import('./pages/blog')),
    exact: true,
  },
  {
    path: '/contact',
    component: loadable(() => import('./pages/contact')),
    exact: true,
  },
];

export default function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
          <Route path="" component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
};
