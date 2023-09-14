
import './App.css';
import Menu from './component/menu'
import Cont  from './component/tabcont';
import { useState } from 'react';



// 전체 페이지
const App = () => {

  // // 서버에서 받은 데이터를 console로 확인
  // useEffect(() => {
  //   axios.get('/api/test')
  //     .then(res => console.log(res))
  //     .catch()
  // })

  const [menu] = useState(['Home','Todo List','Sticker Memo'])

  return (
    <div className="wrap">
      <Menu menu={menu}></Menu>
      <Cont></Cont>
    </div>
  );
}


export {App}

