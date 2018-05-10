import units from '../units'
import { UPDATE_USERINFO } from 'action/user'

const userHis = units.localStorage.getItem('user')

const user = (state = userHis, action) => {
  switch (action.type) {
    case UPDATE_USERINFO:
      return {...state, ...action.userinfo}
    default:
      return state
  }
}

export default user
