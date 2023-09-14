
import { useSelector, useDispatch} from 'react-redux'
import { setbgActions, settabidxActions } from '../store/store.js'
import Todolist from "../page/Todolist"
import { Memo } from "../page/Memo"
import { Main } from '../page/main'
import moment from 'moment';  //현재 시간 사용
import { useState } from 'react';
import 'moment/locale/ko';
const today = moment().format('YYYY-MM-DD')




// 오른쪽 탭 컨텐츠 
function Cont () {


  let bg = useSelector((state) => {return state.bg})
  let tabidx = useSelector((state) => {return state.tabidx})
  console.log("cont안의 idx " + tabidx)





  return (
    <div className={'contWrap ' + ( bg == 'dark'? 'dark' : 'light') }>
      {/* 메뉴 선택시 컨텐츠 등장*/}

      {[
        <div>
            <Main></Main>
        </div>,
        <div>
            <h4 className="tabTitle">Todos</h4>
            <Todolist></Todolist>
        </div>,
        <div>
            <h4 className="tabTitle">Sticker Memo</h4>
            <Memo></Memo>
        </div>
      ][tabidx]
      } 

    </div>
  )
}
  
 

  export default Cont