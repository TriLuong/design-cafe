import { LOGIN_REQUEST } from "./constants"

export const doLogIn = ({ username, password }) => {
  return {
    type: LOGIN_REQUEST,
    payload: { username, password }
  }
}
