import moment from 'moment';  
import { useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import 'moment/locale/ko';
import { todoActions } from '../store/store.js'
import styled from 'styled-components';




function Todolist () {

    let dispatch = useDispatch()
    let todolist = useSelector((state) => {return state.todo.lists})
    let todoDonelist = useSelector((state) => {return state.todo.done})
    const [input, setInput] = useState('')
    const nowTime = moment().format('MM-DD');

    // 완료항목 여부 체크
    let todone = todolist.filter((x) => x.done == true) 
    const [donedisplay, setdoneDisplay] = useState(true)
  
    useEffect(() => {
      if(todone.length !==0 ) {
        setdoneDisplay(false)
      } else { 
        setdoneDisplay(true)
      }
    }, [todone]);


    return(
        <Todolistwrap>
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
                                            }}></span>
                                            <span>
                                                {todolist[i].do}  <span>(id : {todolist[i].id} / date : {todolist[i].date} )</span>
                                            </span> 
                                            <div className='btnWrap'>
                                                <button onClick={()=> { dispatch(todoActions.pushModi(todolist[i].id,true)); }} className='modibtn xi-pen'></button>
                                                <button onClick={() =>
                                                    { dispatch(todoActions.todoRemove(i)) } }>
                                                    <span className='xi-close-min'></span>
                                                </button>
                                            </div>
                                        </div>
    
                                        {/* 수정 클릭시 수정 input 박스 */}
                                        {  todolist[i].status == true? <Showinput id={todolist[i].id}></Showinput> : null } 
                                    </div>
                                )
                            })
                        }
                    </div>
    
                    <div className="todolist todonelist">
                        <h4> 완료된 항목 </h4>
                        <div className={donedisplay == true ? 'display' : 'none'}>
                            <img src={process.env.PUBLIC_URL + 'notfound.png'} />
                            <p>아직 완료된 항목이 없습니다!</p>
                        </div>
                        {
                            todoDonelist.map(function(a,i) {
                                return (
                                    <div className='list'>
                                        <span className='title'>
                                            - {todoDonelist[i].do}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Todolistwrap>
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
            dispatch(todoActions.todoModi(id, input, nowTime));
        }
    }
   

    return(
        <ModiInput>
            <input type="text" placeholder="수정해주세요" 
            onChange={(e)=>{setInput(e.target.value)}}
            />

            <button onClick={()=>{ inputChk(); 
            }}>수정완료</button>
        </ModiInput>
    )
}




// styled components
let Todolistwrap = styled.div `
    display: flex;
    margin-top: 10px;
    &>div {display: flex;flex-direction: column;flex: 1;}
    &>div.rightCont>div.inputList {display: flex;column-gap: 10px;}
    &>div.rightCont>div.inputList>input {flex: 3; border: 1px solid #ddd;padding-left: 10px;border-radius: 5px;}
    &>div.rightCont>div.inputList>input::placeholder {color: #aaa;}
    &>div.rightCont>div.inputList>button {border: none;background-color: #32364a;padding: 10px 30px;border-radius: 5px;color: #fff;}
    &>div.rightCont>div:nth-child(2) {display: flex;justify-content: space-between;column-gap: 30px;}
    &>div.rightCont>div:nth-child(2)>div.todolist {flex: 1;margin-top: 25px;background-color: #fff;border-radius: 20px;padding: 20px;}
    &>div.rightCont>div:nth-child(2)>div.todolist input[type="text"] {border: none;}
    &>div.rightCont>div:nth-child(2)>div.todolist>h4 {font-size: 30px;font-weight: bold;color: #333;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>span.check {display: inline-block;margin-right: 10px;font-size: 25px;cursor: pointer;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>span:nth-child(2).chk {text-decoration: line-through;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>span:nth-child(2).none {text-decoration: none;}
    &>div.rightCont>div:nth-child(2)>div.todolist:not(.todonelist)>div {margin-top: 15px;align-items: center;position: relative;padding: 10px 15px;border-radius: 8px;border: 0.12rem solid #ddd;color: #333;font-weight: 500;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span:nth-of-type(2) {padding-left: 30px;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.display {display: none;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.none {display: flex;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.chk span:nth-of-type(2) {text-decoration: line-through;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.chk .btnWrap {display: none;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk span:nth-of-type(2) {text-decoration: none;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk .btnWrap button {font-size:20px;background-color: transparent;border: none;color: #333;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk .btnWrap button:nth-child(2) {margin-left: 10px;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk .btnWrap {display: block;position: absolute;right: 10px;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span:nth-of-type(2)>span {
        font-size: 14px;
        display: inline-block;    
        position: absolute;
        right: 76px;
        color: #888;
        font-weight: 400;
  
    }
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span.xi-check {display: table;border: 0.12rem solid #333;border-radius: 50%;padding: 5px;font-size: 13px;cursor: pointer;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span.xi-check:hover {background-color: #333;color: #fff;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span.xi-check::before {display: table-cell;vertical-align: middle;}
    &>div.rightCont>div:nth-child(2)>div.todolist>div>div.chk>span.xi-check {background-color: #333;color: #fff;}


    &>div.rightCont>div:nth-child(2)>div.todonelist {position: relative;min-height: 300px;}
    &>div.rightCont>div:nth-child(2)>div.todonelist>div.display {display: block;text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}
    &>div.rightCont>div:nth-child(2)>div.todonelist>div.display>p {font-size: 18px;}
    &>div.rightCont>div:nth-child(2)>div.todonelist>div.none {display: none;}
    &>div.rightCont>div:nth-child(2)>div.todonelist>div.list {margin-top: 15px;}
    &>div.rightCont>div:nth-child(2)>div.todonelist>div.list>span.title {font-size: 16px;font-weight: 400;display: inline-block;}


    @media (min-width:320px) and (max-width:767.99px) {
        &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span:nth-of-type(2)>span {display: none;}
        &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk span:nth-of-type(2) {font-size: 14px;}
        &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span:nth-of-type(2) {margin-left: 10px;padding-left: 0;}
        &>div.rightCont>div:nth-child(2)>div.todolist>div>div>span.xi-check {font-size: 10px;}
        &>div.rightCont>div:nth-child(2)>div.todolist>div>div.nochk .btnWrap button {font-size: 15px;}
        &>div.rightCont>div:nth-child(2)>div.todonelist>div.display {top: 55%;}
    }
    
    @media (max-width : 1440px) {
        &>div.rightCont>div:nth-child(2) {display: flex;flex-direction: column;row-gap: 30px;}
    }
    @media (min-width:320px) and (max-width:767.99px) {
        &>div.rightCont>div:nth-child(2)>div.todolist>h4 {font-size: 25px;}
    }

`



let ModiInput = styled.div `
    &>button {
        background-color: transparent;
        display: inline-block;    
        right: 10px;
        position: absolute;
        padding: 2px 15px;
        border: 0.12rem solid #333;
        border-radius: 5px;
    }
    &>button:hover  {background-color: #333;color: #fff;}
`













export default Todolist