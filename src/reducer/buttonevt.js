

// 버튼 클릭시 배경색상 변경
const initialBg = [
    {
        color : "light"
    },
    {
        color : "dark"
    },

]

const setbgReducer = (state = initialBg, action) => {
    switch(action.type) {
        case "SET_BG" :
            return {
                ...state,
                color : action.color
            };
            default :
                return state;
    }
}


export default setbgReducer