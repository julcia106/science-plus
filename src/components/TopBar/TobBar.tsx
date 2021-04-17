import {FC} from 'react'; 
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";

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

    }
`;

export const TopBar: FC = () => (
    <Navbar>
        <LeftSide>
            <Links>
                <a href='/home'>Home</a>
                <a href='/feedback'>Feedback</a>
                <a href='/aboutus'>About Us</a>
                <a href='/contact'>Contact</a>
            </Links>
        </LeftSide>
        <RightSide>
            <input type="text" placeholder="Search..." />
            <button>
                <SearchIcon />
            </button>
        </RightSide>
    </Navbar>
);
