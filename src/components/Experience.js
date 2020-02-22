import React ,{Component} from 'react';
import styled from 'styled-components';

const Title = styled.h5`
    text-shadow: 1px 1px 1px rgba(193,193,193,0.46);
`

const ImageIcon = styled.i`
    vertical-align: middle;
    margin-right: 10px;
`

const Item = styled.p`
    font-size: 18px;
`

function Experience() {
    return (
        <div>
            <Title>Senior Engineer @ Compal Electronics, Sep 2015 - PRESENT</Title>
            <ul>
                <Item>
                    <ImageIcon className="material-icons small">navigate_next</ImageIcon>
                    Developed full-stack web applications which can monitor, control IoT device through cloud, using Node.js, ReactJS, MySQL Server.
                </Item>
                <Item>
                    <ImageIcon className="material-icons small">navigate_next</ImageIcon>
                    Implementing Azure Cognitive Service to web and mobile application.
                </Item>
                <Item>
                    <ImageIcon className="material-icons small">navigate_next</ImageIcon>
                    Developed full-stack web application for cargo/container tracking and monitoring, using Node.js, Bootstrap, MySQL Server.
                </Item>
                <Item>
                    <ImageIcon className="material-icons small">navigate_next</ImageIcon>
                    Developed a back end service for video conferencing system, using Node.js, MySQL Server.
                </Item>
                <Item>
                    <ImageIcon className="material-icons small">navigate_next</ImageIcon>   
                    Developed mobile application to remote control IoT device, using Android.
                </Item>
            </ul>
        </div>
    )
}

export default Experience;