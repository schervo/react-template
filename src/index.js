// @flow
import React from 'react'
import ReactDOM from 'react-dom'
// import InjectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './redux/store'
import { loadSuccess } from './redux/modules/init/actions'
import { isAuth } from './redux/modules/auth/actions'
import vars from './config/variables'

import Routes from './routes'

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from './config/muiTheme'

const store = configureStore()


window.onload = () => {

  store.dispatch(loadSuccess())

  store.dispatch(isAuth())

  window.onload = null

}

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider theme={getMuiTheme()}>
    <Router>
      <Routes />
    </Router>
  </MuiThemeProvider>
</Provider>,
  document.getElementById('root'));
