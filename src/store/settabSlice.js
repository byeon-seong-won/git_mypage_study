// import {createSlice} from '@reduxjs/toolkit'


// // 메인 탭메뉴 클릭시 컨텐츠 등장
// const tabinitialState =  [
//     {
//         id : 0,
//         menu : 'Home'
//     },
//     {
//         id : 1,
//         menu : 'Todo List'
//     },
//     {
//         id : 2,
//         menu : 'Sticker Memo'
//     }
// ]


// let settabSlice = createSlice ({
//     name : 'settab',
//     initialState : tabinitialState,
//     reducers : {
      
//             setTab (state,action) {
//                 let curtab = state.filter((x) => x.id == action.payload)
//                 console.log(curtab)
//             },
//             // prepare : status => {
//             //     return {
//             //         payload : {
//             //             id,
//             //             status : true,
//             //         }
//             //     }
//             // }
//             // state.push({
//             //   id: action.payload.id,
//             //   status: action.payload.status,
//             // })
       

//             // let idx = state.findIndex((a)=> { return a.id === action.payload })
//             // state[idx].status = ;
//     }
// })


// export default settabSlice