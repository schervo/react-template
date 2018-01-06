// @flow
import { removeAuthToken, setAuthToken } from '../../../helpers/auth'
import { loginMock as loginAPI, logout as logoutAPI, isAuth as isAuthAPI } from './api'
import type { LoginParams } from './types'
import { LOGIN, LOGOUT, AUTH } from './consts'

// ACTION CREATORS
// Use redux-promise-middleware
// https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/chaining-actions.md
// Which, in turn, uses Flux Standard Action (FSA) notation
// https://github.com/acdlite/flux-standard-action

export const login = (
  { username, password }: LoginParams,
): GlobalThunkAction =>
  (dispatch: GlobalDispatch<*>) => dispatch({
    type: LOGIN,
    payload: loginAPI({ username, password })
      .then(response => setAuthToken(response.data.account.jwt)
        .then(() => response)
      ),
  })

export const logout = (history: Object, redirect: ?string): GlobalThunkAction =>
  (dispatch: GlobalDispatch<*>) => {

    // Always do optimistic logout
    removeAuthToken()
    redirect
      ? history.push({ pathname: redirect })
      : history.push({ pathname: '/', query: { login: null } })

    return dispatch({ type: LOGOUT, payload: logoutAPI() })

  }

export const isAuth = (): GlobalThunkAction =>
  (dispatch: GlobalDispatch<*>) => dispatch({
    type: AUTH,
    payload: isAuthAPI(),
  })
