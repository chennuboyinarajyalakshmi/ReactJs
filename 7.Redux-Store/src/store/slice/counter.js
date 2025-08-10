import { createSlice } from '@reduxjs/toolkit'

const initialState={
        CountValue:0
    }
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{

        handleIncreaseCountAction: (state,action)=>{

            state.CountValue+=1

            console.log(state)
            console.log(action)
            console.log(action.payload)


        }
    }
    
})

export const {handleIncreaseCountAction}=counterSlice.actions

export default counterSlice.reducer;