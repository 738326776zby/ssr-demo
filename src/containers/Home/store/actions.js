import { syncAction } from '../../../store/action'
import { CHANGEDATA } from './contants'

export const getHomeListFn = () => async (dispatch, getState, request) => {
  let result = await request.post('/fm/flpz/list', JSON.stringify({}), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let newList = result.data.data.records
  dispatch(
    syncAction({
      type: CHANGEDATA,
      data: {
        newList
      }
    })
  )
}
