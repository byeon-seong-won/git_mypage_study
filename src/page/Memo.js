import moment from 'moment';  //현재 시간 사용
import 'moment/locale/ko';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { memoActions } from '../store/store.js'



// console.log(nowTime)


function Memo () {

  const nowTime = moment().format('YYYY-MM-DD');
  let memolist = useSelector((state) => {return state.memo.memos})
  let memoId = useSelector((state) => {return state.memo.memos.id})
  let listcolor = useSelector((state) => {return state.memo.memos.color})
  let dispatch = useDispatch()
  const [input, setInput] = useState('')


  console.log("memoId " + memoId, "listcolor " + listcolor) 

  // bg 변경
  // const [bgcolor, setBgcolor] = useState('beige')
  // const [idx, setIdx] = useState('')


 


    return(
        // <h1>메모장</h1>
        <Memowrap>
            {/* <div onClick={()=>{memoadd(nowTime); 
                }} className='addMemobtn'>+
            </div> */}
            {/* <input type="text" placeholder="메모를 추가해주세요" onChange={(e)=> {setInput(e.target.value)}}/> */}
            <button className='addMemobtn xi-plus' onClick={()=> {dispatch(memoActions.memoAdd(input, nowTime))}}></button>
            <ul className="memowrapcont">
                {
                    memolist.map(function(a,i) {
                        return(
                            <li className={memolist[i].color}>
                                <span className='blue' onClick={()=> {dispatch(memoActions.modiBg(i, 'blue'));}}></span>
                                <span className='yellow' onClick={()=> {dispatch(memoActions.modiBg(i, 'yellow'));}}></span>
                                <span className='pink' onClick={()=> {dispatch(memoActions.modiBg(i, 'pink'));}}></span>
                                <span>{memolist[i].date} / {memolist[i].id}</span>
                                <span>{memolist[i].cont}</span>
                            </li>
                            
                        )
                    })
                }
                {/* {  modi == true ? console.log("modi true") : null } */}
            </ul>
        </Memowrap>
    )
}



// const Addmemo = () => {
//     return(
//         <li onClick={()=> {memomodi(true); findIdx(); }} className={idx == i ? 'none' : 'display'}>
//             <span>{memo[i].date} / {memo[i].id}</span>
//             <span>{memo[i].cont}</span>
//         </li> 
//     )
// }




// styled components
let Memowrap = styled.div `
  .addMemobtn {
    margin-top :10px;
    background-color: transparent;
    display: inline-block;
    border: none;
    font-size : 30px;
    border: 0.15rem solid #333;
    color : #333;
    &:hover {
        background-color : #333;
        color : #fff;
    }
  }
  &>input {
    display: flex;
    justify-content: space-between;
  }
  &>ul.memowrapcont {
    margin-top : 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    &>li {padding : 1rem;}
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
    &>li.blue {background-color:blue;}
    &>li.yellow {background-color:yellow;}
    &>li.pink {background-color:pink;}
    &>li {
        background-color:beige;
        &>span.blue {background-color:blue;width: 15px;height : 15px;display : inline-block;}
        &>span.yellow {background-color:yellow;width: 15px;height : 15px;display : inline-block;}
        &>span.pink {background-color:pink;width: 15px;height : 15px;display : inline-block;}
    }

    &>li.display {display: block;}
  }
` 





export default Memo