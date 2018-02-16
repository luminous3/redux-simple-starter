import { CHANGE_AUTH} from './types'

expirt function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
