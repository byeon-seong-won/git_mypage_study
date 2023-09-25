
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
            do : "영화 보기",
            date : '06-28',
            status : false

        },
        {
            id : 1,
            do : "운동 가기",
            date : '06-29',
            status : false

        },
        {
            id : 2,
            do : "정처기 공부하기",
            date : '06-29',
            status : false

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
                let find = state.lists.findIndex( (x)=> {return x.do == action.payload.do})
                if(find == -1) {
                    state.lists.push(action.payload)
                } else {
                    alert("이미 추가되었습니다.")
                    return;
                }
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

        // 리스트 수정
        todoModi : {
            reducer: (state, action) => {
                state.lists.splice(action.payload.id, 1, action.payload)
            },

            prepare: (id, input, date) => {
                return {
                    payload: {
                        id : id,
                        do : input,
                        date : date,
                    },
                }
            }     
        },

       // 리스트 수정 input 박스 display 
       pushModi : {
            reducer: (state, action) => {
                let exi = state.lists.findIndex( (x)=> {return x.id == action.payload.id})
                state.lists[exi].status = action.payload.status
            },

            prepare: (id, status) => {
                return {
                    payload: {
                        id : id,
                        status : status
                    },
                }
            }     
        },


        // 리스트 완료항목 이동
        todoDone(state,action) {

            let exi = state.lists.findIndex( (x)=> {return x.id == action.payload.id})
            let check = state.done.findIndex( (x)=> {return x.do == action.payload.do})
            if(check !== -1) {
                return;
            } else if(exi !== -1){
                let donearr = state.lists[exi]
                state.done.push(donearr)
            }
   
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