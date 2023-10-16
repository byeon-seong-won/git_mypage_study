import moment from 'moment';  
import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
import 'moment/locale/ko';
import { todoActions } from '../store/store.js'







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
    const [chk, setChk] = useState('')
    const [chkid, setChekid] = useState()
    // 완료항목
    const [doneCont, setDonecont] = useState(true)

    
    return(
        <div className='todolistwrap'>
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
                                        {/* <span className={doneCont == true? 'display' : 'none'}>
                                            아직 완료된 항목이 없습니다!
                                        </span> */}
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

    const inputChk = () => {
        if(input == '') {
            alert("수정사항을 입력해주세요")
            return;
        } else {
            dispatch(todoActions.todoModi(id, input, nowTime)); dispatch(todoActions.pushModi(id,false))
        }
    }
   

    return(
        <div className='modiInput'>
            <input type="text" placeholder="수정해주세요" 
            onChange={(e)=>{setInput(e.target.value)}}
            />

            <button onClick={()=>{ inputChk(); 
            }}>수정완료</button>
        </div>
    )
}


export default Todolist