import {FC} from 'react'; 
import styled from 'styled-components';
import {useState} from 'react';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
 
const Navbar = styled(Wrapper)`
`;

const LeftSide = styled.div `
    flex: 50%;
    display: flex;
    justify-content: left;
    align-items: center;

    button {
        display: none;
        margin-left: 20px;
    }

    #hidden {
        display: flex;
    }

    @media only screen and (max-width: 650px){
        button{
            display:flex;
        }

    }
`;

const RightSide = styled.div `
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 25px;

    input {
        width: 220px;
        height: 30px;
        border: none;
        border-radius: 4px;
        font-size: 20 px;
        padding-left: 15px;
        color: black;
    }

    button {
        height: 32px;
        width: 70px;
        font-size: 16px;
        cursor: pointer;


    }
`;

const Links = styled.div `

    max-height: 80px;

    a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        margin-left: 15px;

        @media only screen and (max-width: 900px){
            font-size: 18px;
        }
        
        @media only screen and (max-width: 750px){
            font-size: 15px;
        }

        @media only screen and (max-width: 650px){
            display: none;
        }
    }

    #hidden {
        position: absolute;
        left: 0px;
        top: 80px;
        height: 230px;
        width: 100%;
        background-color: #021E39;
        display: flex;
        flex-direction: column;
    }

`;

export const TopBar: FC = () => {

    const[showLinks, setShowLinks] = useState(true);
    return (
        <Navbar>
            <LeftSide>
                <Links id={showLinks ? "hidden": ""}>
                    <a href='/home'>Home</a>
                    <a href='/feedback'>Feedback</a>
                    <a href='/aboutus'>About Us</a>
                    <a href='/contact'>Contact</a>
                </Links>
                <button>Open</button>
            </LeftSide>
            <RightSide>
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </RightSide>
        </Navbar>
    );
};
