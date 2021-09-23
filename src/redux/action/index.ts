import { ActionTypes } from "../actionTypes"

interface incrementAction {
       type: ActionTypes.INCREMENT,
       payload: number
}
interface decrementAction {
       type: ActionTypes.DECREMENT,
       payload: number
}
interface resetAction {
       type: ActionTypes.RESET
}

export type Actions = incrementAction | decrementAction | resetAction