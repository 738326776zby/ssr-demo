import { fromJS } from 'immutable'
// 同步action
export const syncAction = payload => {
  let data = payload.data || {}

  for (let i in data) {
    data[i] = fromJS(data[i])
  }
  return {
    type: payload.type,
    data: {
      ...data
    }
  }
}
