// @flow
import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import App from './components'
import NotFound from './components/NotFound'

// Examples
import Home from './components/examples/Home'
// import Profile from './components/examples/Profile'
// import Todos from './components/examples/Todos'

const Routes = () => (
  <App>
    <Switch>

      {/* Example Routes */}
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/profile" component={Profile} />
      <Route exact path="/todos" component={Todos} /> */}
      <Redirect exact from="/" to="/home" />

      {/* 404 */}
      <Route component={NotFound} />

    </Switch>
  </App>
)

export default Routes
