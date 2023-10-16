import moment from 'moment'; 
import { useSelector } from 'react-redux'
import 'moment/locale/ko';
import { useEffect, useState } from 'react';
const nowDate = moment().format('MM-DD');
const today = moment().format('YYYY-MM-DD')



const Main = () => {
  let todolist = useSelector((state) => {return state.todo.lists})
  let memolist = useSelector((state) => {return state.memo.memos})

  let todaymemo = memolist.filter((x) => x.date == nowDate)
  let todaytodo = todolist.filter((x) => x.date == nowDate)

  const [todisplay, settoDisplay] = useState(true)
  const [medisplay, setmeDisplay] = useState(true)

  useEffect(() => {
    if(todaytodo.length !==0 ) {
      settoDisplay(false)
    } else { 
      settoDisplay(true)
    }
  }, [todaytodo]);

  useEffect(() => {
    if(todaymemo.length !==0 ) {
      setmeDisplay(false)
    } else { 
      setmeDisplay(true)
    }
  }, [todaymemo]);






  return (
    <div className="todaywrap">
        <div>
          <div className='imgCont'>
            <img src={process.env.PUBLIC_URL + '/indexMain.png'} alt="copy url" className='indexImg'/>
            <span>Today : {today}</span>
            <div>
              <h1>Welcome, <br></br>How are you?</h1>
            </div>
          </div>
          <div className='bottomCont'>
            <div>
              <h4>
                <span className='xi-calendar-list'></span>
                Today's todos
              </h4>
              <div className={todisplay == true ? 'display' : 'none'}>
                  {/* <img src={process.env.PUBLIC_URL + 'notfound.png'} /> */}
                  <p>오늘의 할일이 없습니다!</p>
              </div>
              <ul>
                {
                  todaytodo.map(function(a,i) {
                    return (
                      <li>
                        
                        <span>{todaytodo[i].do}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <h4>
                <span className='xi-library-books-o'></span>
                Today's memos
              </h4>
              <div className={medisplay == true ? 'display' : 'none'}>
                  {/* <img src={process.env.PUBLIC_URL + 'notfound.png'} /> */}
                  <p>오늘의 메모가 없습니다!</p>
              </div>
              <ul>
                {
                  todaymemo.map(function(a,i) {
                    return (
                      <li>
                        
                        <span>{todaymemo[i].cont}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className='weatherCont'>

          </div>
        </div>     
    </div>
    
  )
}


export { Main }