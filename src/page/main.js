import moment from 'moment';  //현재 시간 사용
import 'moment/locale/ko';
const nowDate = moment().format('MM-DD');
const today = moment().format('YYYY-MM-DD')



const Main = () => {
  // let todaytodo = todolist.filter((x) => x.date == nowDate)
  // console.log(todaytodo)

  return (
    <div className="todaywrap">
      <h1>메인입니다</h1>
        {/* <div>
          <div className='imgCont'>
            <img src={process.env.PUBLIC_URL + '/indexMain.png'} alt="copy url" className='indexImg'/>
            <span>Today : {today}</span>
            <div>
              <h1>Welcome, <br></br>How are you?</h1>
            </div>
          </div>
          <div className='bottomCont'>
            <div>
              <img src={process.env.PUBLIC_URL + '/todo.png'} alt="copy url" className='todoImg'/>
              <h4>Today's List</h4>
              <ul>
                {
                  todaytodo.map(function(a,i) {
                    return (
                      <li>
                        <span className='xi-check'></span>
                        <span>{todaytodo[i].do}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/memo.png'} alt="copy url" className='memoImg'/>
              <h4>Today's Memo</h4>
            </div>
          </div>
          <div className='weatherCont'>

          </div>
        </div>      */}
    </div>
    
  )
}


export { Main }