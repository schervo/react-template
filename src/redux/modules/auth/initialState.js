// @flow
import type { AuthState } from './types'

// Initial state with default values
const initialState: AuthState = {
  token: '',
  error: '',
  isFetching: false,
  isAuth: false
}

export default initialState
