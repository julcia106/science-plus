import React, {FC} from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TobBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

const MyPage = styled.div`

`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () => {
  return (
    <MyPage>
      <TopBar>
        <Content>
          <LeftMenu />
          <div>content</div>
        </Content>
      </TopBar>
    </MyPage>
  );
};

export default MainPage;
