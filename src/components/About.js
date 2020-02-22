import React  from 'react';
import styled from 'styled-components';
import MyPhoto from '../img/photo.jpg';

const AboutText = styled.h5`
    text-shadow: 1px 1px 1px rgba(193,193,193,0.46);
`
const Img = styled.img`
    width: 150px;
	height: 150px;
	background: black;
	border-radius: 50%;
    margin-left: 20px;
	position: relative;
	top: 0;
	left: 0;
`;

const AvatarWrapper  = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Name = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Intro = styled.div`
    font-size: 20px;
`;

const IntroWrapper = styled.div`
    position: relative; 
    left: 60px;
    flex-basis: 100%;
    flex-basis: calc(50%);
`;

const ImageIcon = styled.i`
    vertical-align: middle;
    margin-right: 10px;
`


function About() {
    return (
        <div>
            <AvatarWrapper>
                <Img src={MyPhoto}/>
                <IntroWrapper>
                    <Name>趙虹 Rainbow Chao</Name>
                    <Intro>
                        Software Developer
                        <ul>
                            <li><ImageIcon className="material-icons">email</ImageIcon>
                                rainbowchao79@gmail.com
                            </li>
                            <li><ImageIcon className="material-icons">local_phone</ImageIcon>
                                0916-328128
                            </li>
                        </ul>
                    </Intro>
                </IntroWrapper>
            </AvatarWrapper>
            <AboutText>4+ years experience at IoT products development which includes full-stack web development that meet the requirements of our products on major cloud platforms such as Azure or AWS and Android application development.
            </AboutText>
        </div>
    )
}

export default About;