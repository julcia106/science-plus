import { FC } from "react";
import styled from 'styled-components';
import {SideBarData} from './SideBarData';


// const App = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: pink;
// `;

// const Body = styled.div`
//     margin: 0;
//     padding: 0;
    
// `;

const SideBar = styled.div`
   height: 600px;
   width: 250px;
   background-color: red;
   float: left;

   .SidebarList {
       height: auto%;
       padding: 0;
       width: 100%;

       .row {
           width: 100%;
           height: 50px;
           list-style-type: none;
           margin: 0%;
           display: flex;
           flex-direction: row;
           justify-content: center;
           align-items: center;
           font-family: 'Trebuchet MS';
           cursor: pointer;

           #icon {
               flex: 30%;
               display: grid;
               place-items: center;
           }

           #title {
                flex: 70%;
                color: grey;
           }
       }
   }
`;

const ProfileSection = styled.div`
   height: 200px;
//    margin: 20px 20px 20px 20px; 
   background-color: white;

    #logoIcon {
    height: 39px;
    width: 34px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px; 
   }
`;


export const LeftMenu: FC = () => {
    return(
        <SideBar>
            <ProfileSection>
                <img id="logoIcon" src= "./media/logo.png" />
            </ProfileSection>
            <ul className = "SidebarList">
                {SideBarData.map((val, key)=> {
                    return (
                    <li 
                        key={key} 
                        className= "row"
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}
                    >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                    );
                })}
            </ul>
        </SideBar>
    );
};