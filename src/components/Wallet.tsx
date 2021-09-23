import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, StateType } from "../redux";

function Wallet() {
       const dispatch = useDispatch() //for dispatching action
	const { incrementAmount, decrementAmount, resetAmount } = bindActionCreators(actionCreators, dispatch) //desctructure actions
	const amount = useSelector(( state: StateType ) => state.amount) //declare state type on reducers
       return (
              <div>
                     <h1>Redux TypeScript</h1>
                     <h1>Amount : { amount } </h1>
                     <button onClick={() => incrementAmount( 1 )}>Increment</button>
                     <button onClick={() => decrementAmount( 1 )}>Decrement</button>
                     <button onClick={() => resetAmount( 0 )}>Reset</button>
              </div>
       )
}

export default Wallet
