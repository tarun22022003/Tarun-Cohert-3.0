import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({    // Building Slices(Feature)
    name: 'counter',                         // Name of the slice :
    initialState:{                           // Initial state of the slice
        value:0                               
    },
    reducers:{                                // Building reducers in slices. reducers are the functions which perform operations in the scope of Slice, ex: Counter needs to increase or decrease.
        increment:(state)=>{
            state.value +=1
        },
        decrement : (state)=>{
            state.value -=1
        },
        incrementbyAmount :(state,actions)=>{
            state.value += actions.payload  // here actions are received during the function call and .payload helps to change the value of state according to the provided value during function call.
        }
    }
})

export const {increment, decrement,incrementbyAmount} = counterSlice.actions     // We will export the reducers from slice.actions to use it anywhere required!
export default counterSlice.reducer