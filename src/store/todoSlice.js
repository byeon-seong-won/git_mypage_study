
import {createSlice} from '@reduxjs/toolkit'




// todo list 
const todoinitialState = {

    lists : [
        {
            id : 0,
            do : "영화 보기",
            date : '06-28',
            status : '',
            done : '',

        },
        {
            id : 1,
            do : "운동 가기",
            date : '06-29',
            status : '',
            done :'',

        },
        {
            id : 2,
            do : "정처기 공부하기",
            date : '06-29',
            status : '',
            done :'',

        },
        {
            id : 3,
            do : "React 공부하기",
            date : '06-30',
            status : '',
            done : '',

        },
        {
            id : 4,
            do : "vue 공부하기",
            date : '06-30',
            status : '',
            done : '',

        },
        {
            id : 5,
            do : "포트폴리오 업데이트하기",
            date : '06-30',
            status : '',
            done : '',

        },
        {
            id : 6,
            do : "스터디 하기",
            date : '06-30',
            status : '',
            done : '',

        },
        {
            id : 7,
            do : "노래듣기",
            date : '06-30',
            status : '',
            done : '',

        },
    ],
    done : []
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
                    alert("이미 추가된 목록입니다.");
                    currId--;
                    return;
                }
            },

            prepare: (input, date) => {
                return {
                    payload: {
                        id : currId++,
                        do : input,
                        date : date,
                        status : false,
                        done : false
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
                state.lists.splice(action.payload.idx, 1, action.payload)

            },

            prepare: (idx, input, date) => {
                var currList = new Array();    
                for(var i=1; i<=10; i++) {
                    if(i.done == 'true') {
                        currList.push(i);
                    }
                }
                let currListidx = currList.length;

                return {
                    payload: {
                        idx : idx,
                        id : currListidx,
                        do : input,
                        date : date,
                        status : false,
                        done : false
                    },
                }
            }     
        },

        // 리스트 수정 input 박스 display 
        pushModi : {
            reducer: (state, action) => {
                let idx = state.lists.findIndex( (x)=> {return x.id == action.payload.id})
                state.lists[idx].status = action.payload.status
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
            if(exi !== -1) {
                let donearr = state.lists[exi]
                state.lists[exi].done = true;
                state.done.push(donearr)
            } else {
                return;
            }
        }

    }
})



export default todoSlice 