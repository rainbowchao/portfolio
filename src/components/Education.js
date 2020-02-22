import React from 'react';
import styled from 'styled-components';

const EducationArea = styled.div`
    border-left: 5px solid rgba(69, 90, 100, 0.5);
    padding-left: 15px;
    position: relative;
    /* &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -15px;
        background-color: #455a64;
        border: 3px solid #455a64;
        top: -5px;
        border-radius: 50%;
        z-index: 1;
    } */
`

const EducationSchool = styled.h5`
    text-shadow: 1px 1px 1px rgba(193,193,193,0.46);
`
const EducationDegree = styled.h6`
    text-shadow: 1px 1px 1px rgba(193,193,193,0.46);
`
const EducationDuration = styled.h6`
    text-shadow: 1px 1px 1px rgba(193,193,193,0.46);
`
const EducationArray = [
    {
        school: 'National Taiwan Ocean University',
        degree: 'Master Degree',
        duration: 'September 2013 - July 2015'
    },
    {
        school: 'National Taiwan Ocean University',
        degree: 'Bachelor Degree',
        duration: 'September 2009 - July 2013'
    }
]

function EducationContent({item}) {
    return (
        <EducationArea>
            <EducationSchool>{item.school}</EducationSchool>
            <EducationDegree>{item.degree}</EducationDegree>
            <EducationDuration>{item.duration}</EducationDuration>
        </EducationArea>
    )
}

function Education() {
    return (
        <div>
            {EducationArray.map((item, idx)=> {return <EducationContent key={idx} item={item}/>})}
        </div>
    )
}

export default Education;