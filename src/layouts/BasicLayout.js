import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRouteData } from '../routes';
import ErrorBoundary from './ErrorBoundary';

const routes = getRouteData();
/**
 * 主框架
 */
export default class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ minHeight: window.innerHeight }}>
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              path={route.path}
              key={route.path}
              render={(props) => {
                let Comp = route.component;
                if (!route.layout) {
                  return (
                    <ErrorBoundary>
                      <Comp {...props} />
                    </ErrorBoundary>
                  );
                } else {
                  let Layout = route.layout;
                  return (
                    <ErrorBoundary>
                      <Layout {...props}>
                        <Comp {...props} />
                      </Layout>
                    </ErrorBoundary>
                  );
                }
              }}
            />
          ))}
        </Switch>
      </div>
    );
  }
}
