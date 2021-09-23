import { Actions } from "../action/index"

const initialState = 22

const countReducers = ( state: number = initialState, action: Actions ) => {
       switch( action.type ) {
              case "INCREMENT":
                     return state + action.payload
              case "DECREMENT":
                     return state - action.payload
              case "RESET":
                     return 0
              default:
                     return state
       }
}

export default countReducers