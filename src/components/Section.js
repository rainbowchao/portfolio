import React from "react";
import styled from 'styled-components';

const SectionTitle = styled.h1`
  font-family: 'Lobster';
  font-size: 40px;
`
export default function Section({ title, subcontent, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <SectionTitle>{title}</SectionTitle>
        {subcontent ? React.createElement(subcontent): ''}
        <p>{subtitle}</p>
      </div>
    </div>
  );
}