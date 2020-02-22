import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SkillContainer = styled.div`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(33.333% - 20px);
    margin: 10px;
    /* cursor: pointer; */
    transition: 0.5s all ease-in;
`;

const SkillHeader = styled.h5`
    border-bottom: 5px solid rgba(69, 90, 100, 0.5);
    padding-bottom: 15px;
    position: relative;
`;
const SkillBody = styled.h6``;

const SkillArray = [
    {title: 'Language', content:['JavaScript','Shell Script', 'C', 'C++', 'Java']},
    {title: 'Web Development', content:['React', 'HTML', 'jQuery', 'Bootstrap', 'Node.js']},
    {title: 'Database', content:['MySQL', 'MSSQL', 'MariaDB', 'MongoDB']},
    {title: 'Mobile', content:['Android','React']},
    {title: 'Tools', content:['Git','Android Studio', 'ADB', 'Visual Studio']},
    {title: 'DevOps', content:['Azure', 'AWS']},
]

function Skill({skill}) {
    return (
        <SkillContainer>
            <SkillHeader>{skill.title}</SkillHeader>
            {skill.content.map((a)=>{return <SkillBody key={a}>{a}</SkillBody>})}
        </SkillContainer>
    )
}

function Skills() {
    return (
        <SkillsWrapper>       
            {SkillArray.map((item)=> {return <Skill key={item.title} skill={item}/>})}
        </SkillsWrapper>
    )
}

export default Skills;