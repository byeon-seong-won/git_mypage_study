import {configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import setbgSlice from './setbgSlice'
import settabidxSlice from './settabidxSlice'


  const store =  configureStore ({
    reducer : {
        todo : todoSlice.reducer,
        bg : setbgSlice.reducer,
        tabidx : settabidxSlice.reducer,
    }
  })


  export const todoActions = todoSlice.actions
  export const setbgActions = setbgSlice.actions
  export const settabidxActions = settabidxSlice.actions

  export default store;

 