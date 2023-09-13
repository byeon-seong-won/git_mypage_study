import moment from 'moment';  //현재 시간 사용
import 'moment/locale/ko';
import styled from 'styled-components';




let input = '';
const nowTime = moment().format('YYYY-MM-DD');
// console.log(nowTime)


const Memo = () => {
    return(
        <h1>메모장</h1>
        // <Memowrap>
        //     <div onClick={()=>{memoadd(nowTime); 
        //         }} className='addMemobtn'>+
        //     </div>
        //     <input type="text" placeholder="검색" />
        //     <ul className="memowrapcont">
        //         {
        //             memo.map(function(a,i) {
        //                 return(
        //                     <li onClick={()=> {memomodi(true, i); }}>
        //                         <span>{memo[i].date} / {memo[i].id}</span>
        //                         <span>{memo[i].cont}</span>
        //                     </li>
                            
        //                 )
        //             })
        //         }
        //         {  modi == true ? console.log("modi true") : null }
        //     </ul>
        // </Memowrap>
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
    &>li {
        list-style-type: none;
        background-color: #fff;
        padding: 20px;
        text-align: center;
        &>span {
            display: block;
            font-size: 13px;
        }
    }
    &>li.none {display: none;}
    &>li.display {display: block;}
  }
` 





export { Memo }