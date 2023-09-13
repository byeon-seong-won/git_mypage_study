import moment from 'moment';  //현재 시간 사용
import { useSelector, useDispatch} from 'react-redux'
import 'moment/locale/ko';
import { todoActions  } from '../store/store.js'


const nowTime = moment().format('MM-DD');




function Todolist () {
    
    let todos = useSelector((state) => {return state.todo.lists})
    let dispatch = useDispatch()
    let input = '';
    let modiInput = '';


    return(
        <div className='todolistwrap'>
            <div className='calendar'>
                Calendar!
            </div>
            <div className='rightCont'>
                <div className='inputList'>
                    <input type="text" placeholder="할일을 입력하세요" onChange={(e)=> {input = e.target.value}}/>
                    <button onClick={()=> {dispatch(todoActions.todo_add(input, nowTime))} }>추가</button>
                </div>
                <div className="todolist">
                    <h4> 할일 </h4>
                    {
                        todos.map(function(a,i) {
                            return(
                                <div>
                                    {/* { todoInput.status == true ? 
                                    <Showinput todochg={todochg}  todoInput={todoInput} todolist={todolist}></Showinput> : null } */}
                                    {/* <span className="xi-check-circle-o check" onClick={() => {tododone(todolist[i].id);}} ></span> */}
                                    {/* <span className={todoInput.id == i ?  'none ' : 'block'}> */}
                                    <span>
                                        {todos[i].do} | {todos[i].id} | {todos[i].date}
                                    </span>
                                    
                                    {/* <button onClick={()=>{props.showInput(true,     i); console.log(props.todoInput)}}  >수정누르면 inputbox</button> */}
                                    
                                    <button onClick={() =>
                                         {dispatch(todoActions.todo_remove(todos[i].id))} }>
                                        <span className='xi-close-min'></span>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className="todolist">
                    <h4> 완료된 항목 </h4>
                    {
                        tododonelist.map(function(a,i) {
                            return(
                                <div>

                                    <span onClick={() => {modidone(tododonelist[i].id); console.log(tododonelist[i].id)}} className='title'>
                                        {tododonelist[i].do} {tododonelist[i].id}
                                    </span>

                                </div>
                            )
                        })
                    }
                </div> */}
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