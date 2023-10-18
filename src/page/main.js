import moment from 'moment'; 
import { useSelector } from 'react-redux'
import 'moment/locale/ko';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const nowDate = moment().format('MM-DD');
const today = moment().format('YYYY-MM-DD')



const Main = () => {
  let todolist = useSelector((state) => {return state.todo.lists})
  let memolist = useSelector((state) => {return state.memo.memos})

  let todaymemo = memolist.filter((x) => x.date == nowDate)
  let todaytodo = todolist.filter((x) => x.date == nowDate)

  const [todisplay, settoDisplay] = useState(true)
  const [medisplay, setmeDisplay] = useState(true)

  // 오늘의 내용 추가 여부 체크
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
    <Todaywrap>
        <div>
          <div className='imgCont'>
            <img src={process.env.PUBLIC_URL + 'indexMain.png'} alt="copy url" className='indexImg'/>
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
    </Todaywrap>
    
  )
}


// styled components
let Todaywrap = styled.div `
  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &>div.imgCont {
      position: relative;
      width: 100%;
      border-radius: 20px;
      margin: 0 auto;
      overflow: hidden;
      @media (min-width:320px) and (max-width:767.99px) {
        border-radius: 0;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0,0.7));
      }
      &>span {
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        top: 40px;
        right: 40px;
        font-size: 20px;
        @media (min-width: 320px) and (max-width: 768px) {
          display: none;
        }
      }
      &>img.indexImg {
        width: 100%;
        border-radius: 20px;
        margin: 0 auto;
        @media (min-width:320px) and (max-width:767.99px) {
          border-radius: 0;
        }
      }
      &>div {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 100%;}
      &>div>h1 {
        color: #fff;
        font-size: 5.5rem;
        text-align: center;
        font-family: 'Anton', sans-serif;
        @media (min-width: 1024px) and (max-width: 1200px) {
          font-size: 4.5rem;
        }
        @media (min-width: 520px) and (max-width: 768px) {
          font-size: 4rem;
        }
        @media (min-width: 320px) and (max-width: 600px) {
          font-size: 2rem;
        }
      }
      &>div>h4 {color: #fff;font-size: 30px;text-align: center;}
    }
    &>div.bottomCont {
      display: flex;
      justify-content: space-around;
      column-gap: 20px;    
      margin: 40px auto 0;
      width: 100%;
      @media (min-width:320px) and (max-width:767.99px) {
        padding: 0 20px;
        box-sizing: border-box;
      }
      &>div {
        text-align: center;
        flex: 1;
        background-color: #fff;
        border-radius: 20px;
        padding: 50px 20px 20px 20px;
        @media (min-width:320px) and (max-width:1024px) {
          padding: 20px;
        }
      }
      &>div>h4 {
        font-size: 1.5rem;
        margin-top: 10px;
        font-weight: bold;
        @media (min-width: 320px) and (max-width: 600px) {
          font-size: 1.3rem;
        }
      }
      &>div>h4 span {margin-right: 15px;display: inline-block;background-color: #edf1f2;border-radius: 50%;width: 50px;height: 50px;line-height: 50px;}
      &>div>ul {
        margin: 20px auto;
        text-align: center;
        padding: 0 50px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        @media (min-width: 320px) and (max-width: 600px) {
          padding: 0;
        }
      }
      &>div>ul li {
        padding: 10px;
        border: 1px solid #888;
        border-radius: 10px;
        min-width: 50px;
        @media (min-width: 320px) and (max-width: 600px) {
          padding: 5px;
        }
      }
      &>div>ul li span:nth-child(1) {
        display: inline-block;
        margin-right: 10px;
        @media (min-width: 320px) and (max-width: 600px) {
          font-size: 14px;
        }
      }
      &>div>div.display {display: block;margin-top: 10px;}
      &>div>div.none {display: none;}
      @media (max-width: 1200px) {
        flex-direction: column;gap: 20px;
      }
    }
  }
`




export { Main }