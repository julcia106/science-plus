import React, {FC} from 'react';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import { ExpandedMenu } from './ExpandedMenu';


const Container = styled.div `
    width: 100%; 
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: ridge;
    
    `;
    const DropDownMenu = styled.div`
    
    select {
        width: 200px;
        height: 20px;
        border-radius: 8px;
        border-color: #dddddd;
        color: grey;
    }
    `;
    
    const LeftSide = styled.div `
    
    #logoIcon {
        height: 30px;
        width: 25px;
        padding-right: 30px;
    }
    #homeIcon {
        margin-bottom: 5px;
    }

`;

const Center = styled.div`

    input {
        width: 350px;
        height: 20px;
        border-radius: 8px;
        border-color: #dddddd;
        font-size: 20 px;
        color: white;
        margin-bottom: 8px;
    }
    button {
        background: white;
        color: grey;
        border: none;
        cursor: pointer;
    }
`;

const RightSide = styled.div `

    img{
        margin-left: 20px;
    }
`;

const Links = styled.div `

    a {
        text-decoration: none;
        color: grey;
        font-family: 'Trebuchet MS';
    }
`;


export const TopBar: FC = () => {
    return(
        <Container>
              <LeftSide>
                <img id="logoIcon" src= "./media/logo.png" />
                <img id="homeIcon" src="./media/icons/house.png" />
            </LeftSide>
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
        </Container>
    );
};