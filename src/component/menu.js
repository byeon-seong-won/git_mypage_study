import { useState } from 'react'
import { setbgActions, settabidxActions } from '../store/store.js'
import { useSelector, useDispatch} from 'react-redux'
// import styled from 'styled-components'



// 왼쪽메뉴
function Menu({menu}) {

  let bg = useSelector((state) => {return state.bg})
  let tabidx = useSelector((state) => {return state.tabidx.id})
  let dispatch = useDispatch()
  const [curidx, setcurIdx] = useState(0)
  // const {counter, person }  = useSelector(state => ({
  //   count : state.counterReducer.count,
  //   person: state.personReducer.person,
  // }));


    return (
      <div className={"menu " + ( bg == 'dark'? 'light' : 'dark') }>
        <div>
          <img src={process.env.PUBLIC_URL + 'profile.jpg'} />
          <p>Byeon seong won</p>
          <ul>
              {
                menu.map(function(a,i) {
                  return(
                    <li onClick={()=> {
                      dispatch(settabidxActions.setTabidx(i)); setcurIdx(i)
                    } } 
                      className={ curidx == i? 'on' : 'none'}>
                      <span class="xi-emoticon"></span>
                      <span> {menu[i]} </span>
                    </li>
                  )
                })
              }
          </ul>
        </div>
        <div className='button'>
          <button onClick={()=> {dispatch(setbgActions.setBg('light'))}}>Light mode</button>
          <button onClick={()=> {dispatch(setbgActions.setBg('dark'))}}>Dark mode</button>
        </div>
      </div>
    )
  }


  export default Menu