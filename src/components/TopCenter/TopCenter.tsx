import {FC} from 'react'; 
import styled from 'styled-components';
  
  
const Container = styled.div `
    height: 30%;
    width: 70%;
    background-color: blue;
    float: right;
    text-align: center;
    margin: 20px;

    div {
        font-size: 20px;
        color: white;
    }
`;

export const TopCenter: FC = () => (
    <Container>
        <div>Top Center</div>
    </Container>
);