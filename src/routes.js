// @flow
import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { connect } from 'react-redux'
import type { RootReducerState } from './redux/modules'

import App from './components'
import NotFound from './components/NotFound'

import PrivateRoute from './components/shared/PrivateRoute'

// Examples
import Home from './components/examples/Home'
// import Profile from './components/examples/Profile'
// import Todos from './components/examples/Todos'

type StateProps = {
  isAuth: boolean,
  isFetching: boolean
}

const Routes = ({isFetching,isAuth}) => {

  if(isFetching){
    return <h1>LOADING</h1>
  }else if(!isAuth){
    return <h1>NO LOG</h1>
  }else {
    return(
      <App>
        <Switch>

          {/* Example Routes */}
          <PrivateRoute exact path="/" isAuth={isAuth} component={Home} />
          {/* <Route exact path="/profile" component={Profile} />
          <Route exact path="/todos" component={Todos} /> */}
          {/* <Redirect exact from="/" to="/home" /> */}

          {/* 404 */}
          <Route component={NotFound} />

        </Switch>
      </App>
    )
  }
}

const mapStateToProps = ({ auth: { isAuth,isFetching } }: RootReducerState): StateProps =>
  ({ isAuth, isFetching })


export default connect(mapStateToProps)(Routes)
