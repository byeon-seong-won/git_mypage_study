
import {createSlice} from '@reduxjs/toolkit'




// todo list 
const meminitialState = {
    input : '',
    memos : [
        {
            id : 0,
            cont : "그들의 있는 가치를 청춘 이상 이상은 얼음이 위하여서 석가는 말이다. 같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-01',
            color : 'beige'
        },
        {
            id : 1,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-01',
            color : 'beige'
        },
        {
            id : 2,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-02',
            color : 'beige'
        },
        {
            id : 3,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-02',
            color : 'beige'
        },
        {
            id : 4,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-03',
            color : 'beige'
        },
        {
            id : 5,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-03',
            color : 'beige'
        },
        {
            id : 6,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-04',
            color : 'beige'
        },
    ],
    status : 'false',
};

let currId = meminitialState.memos.length;
let memoSlice = createSlice({
    name : 'memo',
    initialState : meminitialState,
    reducers : {
        // 리스트 추가
        memoAdd : {
            reducer: (state, action) => {
                state.memos.push(action.payload)
            },

            prepare: (input, date) => {
                return {
                    payload: {
                        id : currId++,
                        cont : input,
                        date : date,
                        color : 'beige'
                    },
                }
            }     
        },

        // 리스트 bg 변경
        modiBg : {
            reducer: (state, action) => {
                let idx = state.memos.findIndex( (x)=> {return x.id == action.payload.id})
                state.memos[idx].color = action.payload.color
            },

            prepare: (id, color) => {
                return {
                    payload: {
                        id : id,
                        color : color
                    },
                }
            }     
        },
    }
})


export default memoSlice 