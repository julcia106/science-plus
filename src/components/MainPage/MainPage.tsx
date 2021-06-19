import React, {FC} from 'react';
import styled from 'styled-components';


import { TopBar } from '../TopBar/TobBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { RightMenu } from '../RightMenu/RightMenu';
import { Footer } from '../Footer/Footer';

const Body = styled.div `
  height: 100vh;
  `
  
  const PageContainer = styled.div `
  position: relative;
  min-height: 100vh;
`
const ContentWrap = styled.div `
  padding-bottom: 2.5rem;    /* Footer height */
`


const MainPage: FC = () => {
  return (
    <Body>
      <PageContainer>
        <ContentWrap>
          <TopBar />
          <LeftMenu />
          <RightMenu />
        </ContentWrap>
          <Footer/>
      </PageContainer>
    </Body>
  );
};

export default MainPage;