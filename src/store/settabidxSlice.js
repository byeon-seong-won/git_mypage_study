import {createSlice} from '@reduxjs/toolkit'


// 메인 탭메뉴 클릭시 idx 전달
const tabidxinitialState =  {
    id : 0
}

let settabidxSlice = createSlice ({
    name : 'tabidx',
    initialState : tabidxinitialState,
    reducers : {
        setTabidx (state,action) {
            return {
                ...state,
                id : action.payload
            }
        }
    }
})


export default settabidxSlice