
import './App.css';
import Menu from './component/menu'
import Cont  from './component/tabcont';
import { useState } from 'react';
import styled from 'styled-components';


const App = () => {
  const [menu] = useState(['Home','Todo List','Sticker Memo'])

  return (
    <Wrap>
      <Menu menu={menu}></Menu>
      <Cont></Cont>
    </Wrap>
  );
}


// styled components
let Wrap = styled.div `
  background-color: #f3f6f7;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  min-height: 100vh;
  @media (min-width: 320px) and (max-width: 1200px) {
    flex-direction: column;
  }
`







export {App}

