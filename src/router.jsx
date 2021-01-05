import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { createHistory as history } from 'history';

import routes from './routes';

class Router extends Component {

  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
        <BrowserRouter>
            <Switch>
              {routeComponents}
            </Switch>
        </BrowserRouter>
    )
  }
}

export default Router;
