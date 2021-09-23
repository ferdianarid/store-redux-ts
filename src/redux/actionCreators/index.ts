import { Dispatch } from "redux"
import { ActionTypes } from "../actionTypes"
import { Actions } from "../action/index"

export const incrementAmount = (amount: number) => {
       return ( dispatch : Dispatch<Actions> ) => {
              dispatch({
                     type: ActionTypes.INCREMENT,
                     payload: amount
              })
       }
}

export const decrementAmount = (amount: number) => {
       return ( dispatch: Dispatch<Actions> ) => {
              dispatch({
                     type: ActionTypes.DECREMENT,
                     payload: amount
              })
       }
}

export const resetAmount = (amount: number) => {
       return ( dispatch: Dispatch<Actions> ) => {
              dispatch({
                     type: ActionTypes.RESET
              })
       }
}