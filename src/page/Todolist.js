import moment from 'moment';  //현재 시간 사용
import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
import 'moment/locale/ko';
import { todoActions } from '../store/store.js'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import





function Todolist () {
    
    let todolist = useSelector((state) => {return state.todo.lists})
    let todoDonelist = useSelector((state) => {return state.todo.done})
    let dispatch = useDispatch()
    const [input, setInput] = useState('')
    const nowTime = moment().format('MM-DD');
    const [value, onChange] = useState(new Date());
    // 수정
    const [modi, setModi] = useState(false)
    let modiStatus = useSelector((state) => {return state.todo.lists.status})
    // 완료항목
    const [chcheck, setChcheck] = useState(false)
    const [chk, setChk] = useState('')
    const [chkid, setChekid] = useState()

    // const pushBtn = () => {
    //     dispatch(todoActions.todoModi(true));
    // }

    // const checking = () => {
    //     if(chcheck == true) {
    //         setChk('chk')
    //     } else {
    //         setChk('none')
    //     }
    // }
    // let addpro = shoes[id]
    // dispatch(cartActions.addItem(addpro))

    return(
        <div className='todolistwrap'>
            <div className='calendar'>
            <Calendar onChange={onChange} value={value} />
            <div className="text-gray-500 mt-4">
           {moment(value).format("YYYY년 MM월 DD일")} 
         </div>
            </div>
            <div className='rightCont'>
                <div className='inputList'>
                    <input type="text" placeholder="할일을 입력하세요" onChange={(e)=> {setInput(e.target.value)}}/>
                    <button onClick={()=> {dispatch(todoActions.todoAdd(input, nowTime))} }>추가</button>
                </div>
                <div className="todolist">
                    <h4> 할일 </h4>
                    {
                        todolist.map(function(a,i) {
                            return (
                                <div>
                                    {/* { todoInput.status == true ? 
                                    <Showinput todochg={todochg}  todoInput={todoInput} todolist={todolist}></Showinput> : null } */}
                                    {/* <span className="xi-check-circle-o check" onClick={() => {tododone(todolist[i].id);}} ></span> */}
                                    {/* <span className={todoInput.id == i ?  'none ' : 'block'}> */}
                                    <div className={ modiStatus == true ? 'display' : 'none'}>
                                        <span className='xi-check' onClick={()=> { 
                                            let todoadd = todolist[i]
                                            dispatch(todoActions.todoDone(todoadd));
                                            setChcheck(true); setChekid(i);
                                        }}></span>
                                        <span className={chkid == i? 'chk' : 'none'}>
                                            {todolist[i].do} | {todolist[i].id} | {todolist[i].date}
                                        </span> 
                                        <button onClick={()=> { dispatch(todoActions.pushModi(i,true)) }} className='modibtn'>수정</button>
                                        <button onClick={() =>
                                            { dispatch(todoActions.todoRemove(i)) } }>
                                            <span className='xi-close-min'></span>
                                        </button>
                                    </div>

                                    {/* 수정 클릭시 수정 input 박스 */}
                                    {  modiStatus == true?  <Showinput id={i}></Showinput> : null } 
                                </div>
                            )
                        })
                    }
                </div>

                <div className="todolist">
                    <h4> 완료된 항목 </h4>
                    {
                        todoDonelist.map(function(a,i) {
                            return(
                                <div>
                                    <span className='title'>
                                        {todoDonelist[i].do} {todoDonelist[i].id} {todoDonelist[i].date}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


// 수정 클릭시 나타나는 input-box component
const Showinput = ({id}) => {
    let dispatch = useDispatch()
    const [input, setInput] = useState('')
    const nowTime = moment().format('MM-DD');

    return(
        <div>
            <input type="text" placeholder="수정해주세요" 
            // className={todoInput.id == todolist[0].id ? 'block ' : 'none'}
            onChange={(e)=>{setInput(e.target.value)}}
            />

            <button onClick={()=>{ dispatch(todoActions.todoModi(id, input, nowTime)); dispatch(todoActions.pushModi(id,false))
            }}>수정완료</button>
        </div>
    )
}


export default Todolist