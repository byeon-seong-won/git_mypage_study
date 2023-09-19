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
    const [chk, setChk] = useState('')
    const [chcheck, setChcheck] = useState(false)
    const [value, onChange] = useState(new Date());

    const [isChecked, setchecked] = useState(false)


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
                                    <div className={isChecked == true ? 'display' : 'none'}>
                                        <span className='xi-check' onClick={()=> { 
                                            let todoadd = todolist[i]
                                            dispatch(todoActions.todoDone(todoadd));
                                            setChcheck(true);
                                        }}></span>
    
                                        <span>
                                            {todolist[i].do} | {todolist[i].id} | {todolist[i].date}
                                        </span>
                                    </div>
                                    
                                    { isChecked == true ? <input type='text' placeholder='수정해주세요'></input> : null } 



                                    {/* <button onClick={()=>{props.showInput(true,     i); console.log(props.todoInput)}}  >수정누르면 inputbox</button> */}
                                    
                                    <button onClick={()=> {setchecked(true)}} className='modibtn'>수정</button>

                                    <button onClick={() =>
                                        { dispatch(todoActions.todoRemove(i)) } }>
                                        <span className='xi-close-min'></span>
                                    </button>
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
// const Showinput = ({
//     todochg, todoInput, todolist
// }) => {
//     return(
//         <div>
//             <input type="text" placeholder="수정할 항목을 입력하세요" 
//             className={todoInput.id == todolist[0].id ? 'block ' : 'none'}
//             onChange={(e)=>{modiInput = e.target.value}}/>

//             <button onClick={()=>{
//             }}>최종수정</button>
//         </div>
//     )
// }


export default Todolist