
import {createSlice} from '@reduxjs/toolkit'




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

        }
    ]
};

let currId = todoinitialState.lists.length;
let todoSlice = createSlice({
    name : 'todo',
    initialState : todoinitialState,
    reducers : {
        // 리스트 추가
        todoAdd : {
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
        todoRemove(state, action) {
            state.lists.splice(action.payload,1)
        },

        // 리스트 완료항목 이동
        todoDone(state,action) {
            let listarr = state.lists.filter((x) => x.do !== action.payload.do)
            let exi = state.lists.findIndex( (x)=> {return x.do == action.payload.do})

            let donearr = state.lists[exi]

            state.done.push(donearr)
            state.lists = listarr
   
        }

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