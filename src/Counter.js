import { useReducer, useState } from "react";

const intialState = {
    count : 0
}

function reducer (state=intialState, action){
    switch(action.type){
        case 'INCREMENT' :
            return {count : state.count +1}
        case 'DECREMENT' :
            return {count : state.count - 1}

        default:
            return new Error("Wrong button Clicked")
    }
}


const Counter = () =>{
    const [state, dispatch ] = useReducer(reducer, intialState);
    return(
        <div>
            <h1>{state.count}</h1>
            <br></br>
            <button onClick={()=>dispatch({ type : 'INCREMENT'})}>ADD</button>
            <button onClick={()=>dispatch({ type : 'DECREMENT'})}>SUB</button>
        </div>
    )
}

export default Counter;