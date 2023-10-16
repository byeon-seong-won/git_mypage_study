import moment from 'moment';  //현재 시간 사용
import 'moment/locale/ko';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { memoActions } from '../store/store.js'



function Memo () {

  const nowTime = moment().format('YYYY-MM-DD');
  let memolist = useSelector((state) => {return state.memo.memos})
  let memoId = useSelector((state) => {return state.memo.memos.id})
  let listcolor = useSelector((state) => {return state.memo.memos.color})
  let dispatch = useDispatch()
  const [input, setInput] = useState('')



    return(
        <Memowrap>
            <button className='addMemobtn xi-plus' onClick={()=> {dispatch(memoActions.memoAdd(input, nowTime))}}></button>
            <ul className="memowrapcont">
                {
                    memolist.map(function(a,i) {
                        return(
                            <li className={memolist[i].color}>
                                <span className='blue' onClick={()=> {dispatch(memoActions.modiBg(i, 'blue'));}}></span>
                                <span className='yellow' onClick={()=> {dispatch(memoActions.modiBg(i, 'yellow'));}}></span>
                                <span className='pink' onClick={()=> {dispatch(memoActions.modiBg(i, 'pink'));}}></span>
                                <div className={memolist[i].status == true ? 'display' : 'none'}>    
                                    <p onClick={ ()=> {dispatch(memoActions.memoModi(i,true)); }}>{memolist[i].cont}</p>
                                    <p> (날짜 : {memolist[i].date} / id : {memolist[i].id}) </p>
                                </div>
                                {/* 메모 클릭시 input 박스 */}
                                {  memolist[i].status == true? <Addtext id={i} color={listcolor}></Addtext> : null } 
                            </li>
                        )
                    })
                }
            </ul>
        </Memowrap>
    )
}



// 메모 클릭시 나타나는 input-box component
const Addtext = ({id, color}) => {
    let dispatch = useDispatch()
    const [input, setInput] = useState('')
    const nowTime = moment().format('MM-DD');

    const inputChk = () => {
        if(input == '') {
            alert("내용을 입력해주세요")
            return;
        } else {
            dispatch(memoActions.textModi(id, input, nowTime,color)); dispatch(memoActions.memoModi(id,false))
        }
    }

    return(
        <div className='modiInput'>
            <input type="text" placeholder="내용을 입력해주세요" 
            onChange={(e)=>{setInput(e.target.value)}}
            />

            <button onClick={()=>{ inputChk(); 
            }}>입력완료</button>
        </div>
    )


}






// styled components
let Memowrap = styled.div `
  .addMemobtn {
    margin-top :10px;
    background-color: transparent;
    display: inline-block;
    border: none;
    font-size : 30px;
    color : #444;
    &:hover {
        background-color : #444;
        color : #fff;
    }
  }
  &>input {
    display: flex;
    justify-content: space-between;
  }
  &>ul.memowrapcont {
    margin-top : 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    &>li {padding : 1rem;cursor : pointer;min-height: 180px;}
    &>li.none {
        list-style-type: none;
        background-color: #fff;
        padding: 20px;
        text-align: center;
        &>span {
            display: block;
            font-size: 13px;
            cursor: pointer;
        }
        
    }
    &>li.blue {background-color:blue;cursor : pointer;}
    &>li.yellow {background-color:yellow;cursor : pointer;}
    &>li.pink {background-color:pink;cursor : pointer;}
    &>li {
        position: relative;
        background-color:beige;
        &>div input {border :none;background-color : transparent;width : 100%;height : 100%}
        &>div.display {display : none;}
        &>div.none {display : block;}
        &>span.blue {border:1px solid #333;background-color:blue;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.yellow {border:1px solid #333;background-color:yellow;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.pink {border:1px solid #333;background-color:pink;width: 15px;height : 15px;display : inline-block;}
        &>div>p:nth-of-type(1) {font-weight: 500;color : #333; font-size : 16px;margin-top: 10px}
        &>div>p:nth-of-type(2) {color : #666; font-size : 14px;margin-top: 20px;position: absolute;bottom: 20px;right: 20px;}
    }

    &>li.display {display: block;}
  }
` 





export default Memo