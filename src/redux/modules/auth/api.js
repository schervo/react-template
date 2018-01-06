// @flow
import { post, mock, get } from '../../../helpers/api'
import env from '../../../config/env'
import userMock from './mocks'
import type { LoginParams } from './types'
import { getAuthToken } from '../../../helpers/auth'

const { API_URL, USE_MOCK_API } = env

export const loginMock = ({ username, password }: LoginParams) => mock(userMock)

export const login = ({ username, password }: LoginParams) => (
  USE_MOCK_API
    ? loginMock({ username, password })
    : post(`${API_URL}/auth/login`, { username, password }, {
      // Override and don't send auth header for login
      headers: {
        Authorization: undefined,
      },
    })
)

export const logoutMock = () => mock({})

export const logout = () => (
  USE_MOCK_API
    ? logoutMock()
    : post(`${API_URL}/auth/logout`)
)

export const isAuthMock = () => mock(userMock)

export const isAuth = () =>(
  USE_MOCK_API
    ? isAuthMock()
    : get(`${API_URL}/auth/isauth`)
)
