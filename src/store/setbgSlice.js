import {createSlice} from '@reduxjs/toolkit'


// 버튼 클릭시 배경색상 변경
const setbginitialBg = {
    color : ' '
}

let setbgSlice = createSlice ({
    name : 'setbg',
    initialState : setbginitialBg,
    reducers : {
        setBg(state, action) {
            return state = action.payload
        }
    }

})


export default setbgSlice