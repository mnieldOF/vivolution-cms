import React from 'react';
import styled from '@emotion/styled';
import IcomoonReact from 'icomoon-react';
import iconSet from '../images/selection.js';


const DynamicComponetStyled = styled.div`
  ${props =>
    props.bg &&
    `
      background: ${props.bg};  
      border-radius:50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

const Icon = ({ color, size, icon, width, height, bg, ...props }) => {
  return (
    <DynamicComponetStyled width={width} height={height} bg={bg} {...props}>
      <IcomoonReact iconSet={iconSet} color={color} size={size} icon={icon} />
    </DynamicComponetStyled>
  );
};

export default Icon;