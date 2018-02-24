import { UPDATE_USERINFO } from 'action/user'

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USERINFO:
      return {...state, ...action.userinfo}
    default:
      return state
  }
}

export default user
