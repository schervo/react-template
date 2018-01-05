// @flow
import { applyMiddleware, createStore, compose } from 'redux'
// import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './modules'


function configureStore (): Object {


  const middleware = [
    thunk,
    promiseMiddleware(),
  ]

  // only log redux actions in development
  if (process.env.NODE_ENV === 'development') {

    // logger needs to be last
    // uncomment if needed
    // middleware.push(require('redux-logger').createLogger())

  }

  // https://github.com/zalmoxisus/redux-devtools-extension
  // https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f

  const enhancer = compose(
    applyMiddleware(...middleware),
  )

  const store = createStore(rootReducer, enhancer)

  // HMR in React Native
  if (module.hot) {

    module.hot.accept(() =>
      store.replaceReducer(require('./modules').default)) // eslint-disable-line

  }

  return store

}


export default configureStore
