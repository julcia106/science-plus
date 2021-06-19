import React, {FC} from 'react';
import styled from 'styled-components';

const Container = styled.div `
    background-color: white;
    text-align:center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.2rem;            /* Footer height */
`;

export const Footer: FC = () => {
    return(
        <Container>Footer</Container>
    );
};