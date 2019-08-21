import * as types from './contants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  newList: [],
  name: '张博亚'
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      if (Object.values(types).includes(action.type)) {
        let obj = { ...action.data }
        return state.merge(obj)
      }
      break
  }
  return state
}
