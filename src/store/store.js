import {configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import setbgSlice from './setbgSlice'
import settabidxSlice from './settabidxSlice'
import memoSlice from './memoSlice'


  const store =  configureStore ({
    reducer : {
        todo : todoSlice.reducer,
        memo : memoSlice.reducer,
        bg : setbgSlice.reducer,
        tabidx : settabidxSlice.reducer,
        memo : memoSlice.reducer
    }
  })


  export const todoActions = todoSlice.actions
  export const setbgActions = setbgSlice.actions
  export const settabidxActions = settabidxSlice.actions
  export const memoActions = memoSlice.actions
  
  export default store;

 