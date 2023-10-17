
import { useSelector} from 'react-redux'
import Todolist from "../page/Todolist"
import Memo from "../page/Memo"
import { Main } from '../page/main'
import 'moment/locale/ko';



// 오른쪽 탭 컨텐츠 
function Cont () {

  let bg = useSelector((state) => {return state.bg})
  let tabidx = useSelector((state) => {return state.tabidx.id})
  console.log("cont안의 idx " + tabidx)


  return (
    <div className={'contWrap ' + ( bg == 'dark'? 'dark' : 'light') }>
      {[
        <div>
            <Main></Main>
        </div>,
        <div className='todoDiv'>
            <h4 className="tabTitle">Todos</h4>
            <Todolist></Todolist>
        </div>,
        <div className='memoDiv'>
            <h4 className="tabTitle">Sticker Memo</h4>
            <Memo></Memo>
        </div>
      ][tabidx]
      } 
    </div>
  )
}
  
 

export default Cont