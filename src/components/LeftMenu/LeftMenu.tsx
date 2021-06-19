import React, {FC} from 'react';
import styled from 'styled-components';
import { ProfileData } from './ProfileData';
import {SideBarData} from './SideBarData';

const Container = styled.div `
    background-color:#EEE;
    float:left;
    height: calc(100vh - 70px);
    width:25%;
`;

const Left = styled.div `
    background-color: #EEE;
    margin: auto;
    height: 20%;
    width: 250px;
    margin-top: 20px;

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto;
        cursor: pointer;
        color: grey;

       }

    #icon {
        padding: 15px;
       }
    #title {
        font-family: "Times New Roman", Times, serif;
    }
`

const ProfileSection = styled.div`
   height: 270px;
   margin: auto;
   margin-top: 30px;
   width: 250px;
   background-color: white;
   color: MediumTurquoise;
   font-family: "Times New Roman", Times, serif;
   border-radius: 20px;
   box-shadow: 5px 10px 8px #888888;

    #logoIcon {
    height: 100px;
    width: 100px;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
   }
   
   p {
    font-size: 150%;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
   }

   h1 {
    text-align: center;
    vertical-align: middle;
    padding: 10px;
   }

   .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: grey;

    #icon {
        padding: 10px;
       }
    #title {
        font-family: "Times New Roman", Times, serif;
    }

    #rightIcon{
        padding-left: 20px;
    }
   }

   hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

`;

export const LeftMenu: FC = () => {
    return(
        <Container>
            <ProfileSection>
                <img id = "logoIcon" src= "./media/flower.jpg"></img>
                <p>Humberta Swift</p>
                <h1>Job title - Company</h1>
                <hr></hr>

                <ul className = "ProfileLinks">
                {ProfileData.map((val, key)=> {
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
                        <div id="rightIcon">{val.icon2}</div>
                    </li>
                    );
                })}
            </ul>
            </ProfileSection>

                <Left>
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
                </Left>
        </Container>
    );
};