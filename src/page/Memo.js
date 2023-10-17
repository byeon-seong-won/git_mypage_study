import moment from 'moment'; 
import 'moment/locale/ko';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { memoActions } from '../store/store.js'



function Memo () {

  const nowTime = moment().format('YYYY-MM-DD');
  let memolist = useSelector((state) => {return state.memo.memos})
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
                                <span className='red' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'red'));}}></span>
                                <span className='pink' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'pink'));}}></span>
                                <span className='yellow' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'yellow'));}}></span>
                                <span className='beige' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'beige'));}}></span>
                                <span className='green' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'green'));}}></span>
                                <span className='blue' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'blue'));}}></span>
                                <span className='purple' onClick={()=> {dispatch(memoActions.modiBg(memolist[i].id, 'purple'));}}></span>
                                
                                <div className={memolist[i].status == true ? 'display' : 'none'}>    
                                    <p onClick={ ()=> {dispatch(memoActions.memoModi(memolist[i].id,true)); }}>{memolist[i].cont}</p>
                                    <p> (date : {memolist[i].date} / id : {memolist[i].id}) </p>
                                </div>
                                <button onClick={() =>
                                    { dispatch(memoActions.memoRemove(i)) } }>
                                    <span className='xi-close-min'></span>
                                </button>
                                {/* 메모 클릭시 input 박스 */}
                                {  memolist[i].status == true? <Addtext id={i} color={memolist[i].color}></Addtext> : null } 
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
            dispatch(memoActions.textModi(id, input, nowTime, color));
        }
    }

    return(
        <div className='memomodiInput'>
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
    @media (min-width:768px) and (max-width:1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width:320px) and (max-width:767.99px) {
        grid-template-columns: repeat(1, 1fr);
    }
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
    &>li.red {background-color:#F28379;cursor : pointer;}
    &>li.yellow {background-color:#F2DC9B;cursor : pointer;}
    &>li.beige {background-color:beige;cursor : pointer;}
    &>li.green {background-color:#B7F29B;cursor : pointer;}
    &>li.pink {background-color:pink;cursor : pointer;}
    &>li.blue {background-color:#A0D3F2;cursor : pointer;}
    &>li.purple {background-color:#9A9DD9;cursor : pointer;}
    &>li {
        position: relative;
        background-color:beige;
        &>div input {border :none;background-color : transparent;width : 100%;height : 100%}
        &>div.display {display : none;}
        &>div.none {display : block;}
        &>span.red {border:1px solid #333;background-color:#F28379;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.green {border:1px solid #333;background-color:#B7F29B;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.beige {border:1px solid #333;background-color:beige;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.yellow {border:1px solid #333;background-color:#F2DC9B;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.purple {border:1px solid #333;background-color:#9A9DD9;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.blue {border:1px solid #333;background-color:#A0D3F2;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>span.pink {border:1px solid #333;background-color:pink;width: 15px;height : 15px;display : inline-block;margin-right : 2px;}
        &>div>p:nth-of-type(1) {font-weight: 500;color : #333; font-size : 16px;margin-top: 10px}
        &>div>p:nth-of-type(2) {
            color : #666; 
            font-size : 14px;
            position: absolute;
            top: 20px;
            right: 50px;
            @media (min-width:320px) and (max-width:1440px) {
                display : none;
            }   
        }
        &>button {position:absolute;right: 10px;top: 10px;background-color: transparent;border: none;font-size: 24px;color: #666;}
    }

    &>li.display {display: block;}
    .memomodiInput button {
        background-color: transparent;
        display: inline-block;    
        right: 10px;
        position: absolute;
        padding: 2px 15px;
        border: 0.12rem solid #333;
        border-radius: 5px;
        bottom : 20px;
        &:hover {background-color: #333;color: #fff;}
    }
  }
` 





export default Memo