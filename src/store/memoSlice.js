
import {createSlice} from '@reduxjs/toolkit'




// memo
const meminitialState = {
    input : '',
    memos : [
        {
            id : 0,
            cont : "IDE :  컴파일 - 주어진 언어로 작성된 컴퓨터 프로그램을 다른 언어의 동등한 프로그램으로 변환하는 기능 (고급언어에서 저급언어로 변환하는 기능임) deployment - 소프트웨어를 최종 사용자에게 전달하기 위한 기능",
            date : '2023-08-01',
            color : '',
            status : ''
        },
        {
            id : 1,
            cont : "미들웨어 :여러 운영체제에서 응용 프로그램들 사이에 위치한 소프트웨어로 소프트웨어 컴포넌트를 연결하기 위한 준비된 인프라 구조를 제공함여러 컴포넌트를 다대다, 1대1, 1대다 여러가지 형태로 연결 가능",
            date : '2023-08-01',
            color : '',
            status : ''
        },
        {
            id : 2,
            cont : "객체 : 객체의 상태는 속성값에 의해 정의됨 필요한 자료 구조와 수행되는 함수들을 가진 하나의 독립된 존재 상태, 동작, 고유 식별자를 가진 모든 것임 -- 클래스 : 공통 속성을 공유하는 객체들의 집합임",
            date : '2023-08-02',
            color : '',
            status : ''
        },
        {
            id : 3,
            cont : "객체지향의 다형성 : 오버로딩 - 같은 이름의 메소드를 중복하여 정의 / 메서드의 이름은 동일 but 매개변수 수나 타입을 다르게 함 오버라이딩 - 상속관계에서만 발생, 슈퍼클래스의 메서드를 서브클래스에서도 동일한 메서드를 정의함  ",
            date : '2023-08-02',
            color : 'beige',
            status : ''
        },
        {
            id : 4,
            cont : "CLI : 텍스트 형태의 인터페이스 GUI : 마우스로 선택해 작업하는 그래픽 환경 인터페이스 NUI : 사용자의 말이나 행동으로 기기조작하는 인터페이스 VUI : 사람의 음성으로 기기 조작하는 인터페이스 OUI : 모든 사물과 사용자 간의 상호작용을 위한 인터페이스",
            date : '2023-08-03',
            color : 'beige',
            status : ''
        },
        {
            id : 5,
            cont : "MVC모델 : 사용자 인터페이스를 담당하는 계층의 응집도를 높일 수 있음, 여러개의 UI만들어 그 사이에 결합도를 낮출 수 있음, 전달자 역할은 모델이 아닌 제어 controller임",
            date : '2023-08-03',
            color : 'beige',
            status : ''
        },
        {
            id : 6,
            cont : "JSON : 속성 - 값 쌍 으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷임, AJAX에서 많이 사용되고 XML을 대체하는 주요 데이터 포맷임 언어 독립형 데이터 포맷으로 다양한 프로그래밍 언어에서 사용됨",
            date : '2023-08-04',
            color : 'beige',
            status : ''
        },
    ],
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

            prepare: (date) => {
                return {
                    payload: {
                        id : currId++,
                        cont : '내용을 입력해주세요',
                        date : date,
                        color : '',
                        status : false,
                    },
                }
            }     
        },

        // 리스트 삭제
        memoRemove(state, action) {
            state.memos.splice(action.payload,1)
        },

        // 텍스트 수정 동작
        memoModi : {
            reducer: (state, action) => {
                let idx = state.memos.findIndex( (x)=> {return x.id == action.payload.id})
                state.memos[idx].status = action.payload.status
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

        // 텍스트 넣기 동작
        textModi : {
            reducer: (state, action) => {
                state.memos.splice(action.payload.id, 1, action.payload)
            },

            prepare: (id, input, date, color) => {
                return {
                    payload: {
                        id : id,
                        cont : input,
                        date : date,
                        color : color,
                        status : false,                  
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