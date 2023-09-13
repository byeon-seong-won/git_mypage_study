



const meminitialState = {
    input : '',
    memos : [
        {
            id : 0,
            cont : "그들의 있는 가치를 청춘 이상 이상은 얼음이 위하여서 석가는 말이다. 같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-01'
        },
        {
            id : 1,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-01'
        },
        {
            id : 2,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-02'
        },
        {
            id : 3,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-02'
        },
        {
            id : 4,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-03'
        },
        {
            id : 5,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-03'
        },
        {
            id : 6,
            cont : "그들의같이 청춘에서만 남는 고동을 청춘을 그들은 운다.",
            date : '2023-08-04'
        },
    ],
    status : 'false',
};


const memoReducer = (state = meminitialState, action) => {
    switch(action.type){
        case "ADD_MEMO" :
            let currId = state.memos.length;
            return {
                ...state,
                memos : state.memos.concat( { id : currId, cont : '', date : action.payload} ),
            }
        case "MODI_MEMO" :
            return {
                status : action.payload
            } 
        default : 
            return state;
    }
}




export default memoReducer