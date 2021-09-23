import { combineReducers } from "redux"
import countReducers from "./countReducers";

const rootReducers = combineReducers({
       amount: countReducers
})

export default rootReducers
export type StateType = ReturnType<typeof rootReducers>