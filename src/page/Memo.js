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
            <input type="text" placeholder="메모를 추가해주세요" onChange={(e)=> {setInput(e.target.value)}}/>
            <button onClick={()=> {dispatch(memoActions.memoAdd(input, nowTime))}}>추가</button>
            <ul className="memowrapcont">
                {
                    memolist.map(function(a,i) {
                        return(
                            <li className={memolist[i].color}>
                                <span className='blue' onClick={()=> {dispatch(memoActions.modiBg(i, 'blue'));console.log("listcolor는 블루" + listcolor + memoId);}}></span>
                                <span className='yellow' onClick={()=> {dispatch(memoActions.modiBg(i, 'yellow'));}}></span>
                                <span className='beige' onClick={()=> {dispatch(memoActions.modiBg(i, 'beige'));}}></span>
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
  &>div .addMemobtn {border: 1px solid #000;background-color: #fff;display: inline-block;}
  &>input {
    display: flex;
    justify-content: space-between;
  }
  &>ul.memowrapcont {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 10px;
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
        &>span.blue {background-color:blue;width: 15px;height : 15px;}
        &>span.yellow {background-color:yellow;width: 15px;height : 15px;}
        &>span.beige {background-color:beige;width: 15px;height : 15px;}
    }
    &>li.blue {background-color:blue;}
    &>li.yellow {background-color:yellow;}
    &>li.beige {background-color:beige;}

    &>li.display {display: block;}
  }
` 





export default Memo