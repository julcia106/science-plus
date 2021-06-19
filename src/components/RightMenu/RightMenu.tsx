import React, {FC} from 'react';
import styled from 'styled-components';

const Container = styled.div `
background-color:#EEE;
float:left;
height: calc(100vh - 70px);
width:75%;
`;

const Top = styled.div `
    background-color: grey;
    height: 30%;
    margin: 10px;
`
const Center = styled.div`
    background-color: grey;
    height: 30%;
    margin: 10px;
`
const Bottom = styled.div `
    background-color: grey;
    height: 32%;
    margin: 10px;
`

export const RightMenu: FC = () => {
    return(
            <Container>
                <Top>Top</Top>
                <Center>Center</Center>
                <Bottom>Bottom</Bottom>
            </Container>
    );
};