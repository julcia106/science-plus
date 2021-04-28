import {FC} from 'react'; 
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from 'react-dropdown';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import {media} from '../../styledHelpers/BreakPoints'
//import { ExpandedMenu } from './ExpandedMenu'; tymczasowo
 
// A new component based on Wrapper, but with some override styles
// To easily make a new component that inherits the styling of another,
// wrap it in the styled() constructor.
const Navbar = styled(Wrapper)`
`;

// użycie breakpoints
// const InnerWrapper = styled.div`
//     width: 1200px;
//     background: ${Colors.white};
//     ${media.desktop`
//         background: ${Colors.black};
//     `}
// `;

const DropDownMenu = styled.div`

    padding-left: 80px;

    select {
        width: 200px;
        border-radius: 8px;
        border-color: #dddddd;
        height: 20px;
        color: grey;
    }
`;

const LeftSide = styled.div `

    flex: 50%;
    display: flex;
    justify-content: left;
    align-items: center;

    #logoIcon {
        height: 39px;
        width: 34px;
        padding-left: 30px;
    }

    #homeIcon{
        padding-left: 30px;
    }

`;

const Center = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 25px;

    input {
        width: 350px;
        height: 20px;
        border-radius: 8px;
        border-color: #dddddd;
        font-size: 20 px;
        padding-left: 15px;
        color: white;
    }

    button {

        background: white;
        color: grey;
        border:none;
        cursor: pointer;
    }
`;

const RightSide = styled.div `

    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;

    img{
        margin-left: 20px;
    }
`;

const Links = styled.div `

    max-height: 80px;

    a {
        text-decoration: none;
        color: grey;
        margin-left: 15px;
        font-family: 'Trebuchet MS';
    }
`;


export const TopBar: FC = () => (
    <Navbar>
        <LeftSide>
            <img id="logoIcon" src= "./media/logo.png" />
            <img id="homeIcon" src="./media/icons/house.png" />
            <Links>
                <a href='/home'>Home</a>
            </Links>
            <DropDownMenu>
            <select>
                <option value="grapefruit">Home</option>
                <option value="lime">Info</option>
                <option value="coconut">Interesting info</option>
                <option value="mango">More info</option>
            </select>
            </DropDownMenu>
        </LeftSide>
        <Center>
            <input type="text" placeholder="Search..." />
            <button>
                <SearchIcon />
            </button>

        </Center>
        <RightSide>
            <img src="./media/icons/house.png" />
            <img src="./media/icons/comments.png" />
            <img src="./media/icons/bell.png" />
        </RightSide>
    </Navbar>
);
