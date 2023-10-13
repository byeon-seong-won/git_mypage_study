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


    // 체크 클릭시 -> 완료항목
    // const [chcheck, setChcheck] = useState(false)
    const [chk, setChk] = useState('')
    const [chkid, setChekid] = useState()



    // 완료항목
    const [doneCont, setDonecont] = useState(true)
    // const doneCheck = () => {
    //     if(doneCont == true) {
    //         setDonecont('display')
    //     } else {
    //         setDonecont('none')
    //     }
    // }




    // let addpro = shoes[id]
    // dispatch(cartActions.addItem(addpro))

    return(
        <div className='todolistwrap'>
            {/* <div className='calendar'>
                <Calendar onChange={onChange} value={value} />
            <div className="text-gray-500 mt-4">
            {moment(value).format("YYYY년 MM월 DD일")} 
            </div>
            </div> */}
            <div className='rightCont'>
                <div className='inputList'>
                    <input type="text" placeholder="할일을 입력하세요" onChange={(e)=> {setInput(e.target.value)}}/>
                    <button onClick={()=> {dispatch(todoActions.todoAdd(input, nowTime))} }>추가</button>
                </div>
                <div>
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
                                        
                                        <div className={`
                                             ${todolist[i].status ? 'display' : 'none'} 
                                             ${todolist[i].done ? 'chk' : 'nochk'}
                                            `}>
                                            <span className='xi-check' onClick={()=> { 
                                                let todone = todolist[i]
                                                dispatch(todoActions.todoDone(todone));
                                                setDonecont(false);
                                                setChekid(i);
                                            }}></span>
                                            <span>
                                                {todolist[i].do}  <span>(id : {todolist[i].id} / date : {todolist[i].date} )</span>
                                            </span> 
                                            <div className='btnWrap'>
                                                <button onClick={()=> { dispatch(todoActions.pushModi(i,true)); }} className='modibtn xi-pen'></button>
                                                <button onClick={() =>
                                                    { dispatch(todoActions.todoRemove(i)) } }>
                                                    <span className='xi-close-min'></span>
                                                </button>
                                            </div>
                                        </div>
    
                                        {/* 수정 클릭시 수정 input 박스 */}
                                        {  todolist[i].status == true? <Showinput id={i}></Showinput> : null } 
                                    </div>
                                )
                            })
                        }
                    </div>
    
                    <div className="todolist todonelist">
                        <h4> 완료된 항목 </h4>
                        {
                            todoDonelist.map(function(a,i) {
                                return (
                                    <div>
                                        <span className='title'>
                                            - {todoDonelist[i].do}
                                            {/* <span>
                                                (id : {todolist[i].id} / date : {todolist[i].date} )
                                            </span> */}
                                        </span>
                                        <span className={doneCont == true? 'display' : 'none'}>
                                            아직 완료된 항목이 없습니다!
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
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
        <div className='modiInput'>
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