
import {createSlice} from '@reduxjs/toolkit'
import 'moment/locale/ko';
import moment from 'moment';  //현재 시간 사용
const nowTime = moment().format('MM-DD');



// todo list 
const todoinitialState = {
    inputs : [
        {
            id : ''
        }
    ],
    lists : [
        {
            id : 0,
            do : "영화보기",
            date : '06-28',

        },
        {
            id : 1,
            do : "운동가기",
            date : '06-29',

        },
        {
            id : 2,
            do : "정처기 공부하기",
            date : '06-29',

        },
    ],
    done : [
        {
            id : '',
            do : '',
            date : '',
            status : ''
        }
    ]
};

let currId = todoinitialState.lists.length;


let todoSlice = createSlice({
    name : 'todo',
    initialState : todoinitialState,
    reducers : {
        // 리스트 추가
        todo_add : {
            reducer: (state, action) => {
                state.lists.push(action.payload)
            },

            prepare: (input, date) => {
                return {
                    payload: {
                        id : currId++,
                        do : input,
                        date : date
                    },
                }
            }     
        },

        // 리스트 삭제

        todo_remove(state, action) {
            state.splice(action.payload,1)
        },
        // todo_done(state,action) {
            
        // }

    }
})



// let addmodalSlice = createSlice({
//   name : 'addmodal',
//   initialState : addmodalinitialState,
//   reducers : {
//     addModal(state,status) {
//        return state = status.payload
//     }
//   }
// })

export default todoSlice 