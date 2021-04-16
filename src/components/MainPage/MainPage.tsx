import React, {FC} from 'react';
import {useState} from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TobBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

const App = styled.div`
    width: 100vw;
    height: 100vh;
`;

// Taką składnię nazywamy JSX i jest to rozszerzenie składni JavaScriptu
// o możliwość wstawiania znaczników.Używa się jej wraz z Reactem do opisywania, 
// jak powinien wyglądać interfejs graficzny strony.
// JSX jest tłumaczony jeden do jednego na reactowe “elementy”.
const Body = styled.div`
  margin: 0;
  padding 0;
`;

const MainPage: FC = () => {
  return (
    <Body>
      <App>
        <TopBar />
      </App>
    </Body>
  );
};

export default MainPage;
