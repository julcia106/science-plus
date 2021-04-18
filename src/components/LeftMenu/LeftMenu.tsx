import { FC } from "react";
import styled from 'styled-components';
import {SideBarData} from './SideBarData';


const App = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Body = styled.div`
    margin: 0;
    padding: 0;
`;

const SideBar = styled.div`
   height: 100%;
   width: 250px;
   background-color: #e6f2ff;
   

   .SidebarList {
       height: auto%;
       padding: 0;
       width: 100%;

       .row {
           width: 100%;
           height: 60px;
           list-style-type: none;
           margin: 0%;
           display: flex;
           flex-direction: row;
           color: white;
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


export const LeftMenu: FC = () => {
    return(
        <Body>
            <App>
                <SideBar>
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
            </App>
        </Body>
    );
};