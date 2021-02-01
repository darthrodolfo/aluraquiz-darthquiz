import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ButtonCustom = styled.button`
  //background-color: ${({ theme }) => theme.colors.secondary};
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.button}, red, red, white);
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  font-family: 'Lato', sans-serif;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    //background-color: #979797;
    background-image: linear-gradient(to right, #979797, #3d3d3d);
    cursor: not-allowed;
  }
`;


export default function Button ({ name, text, ...props }) {
  return (
    <>
      <ButtonCustom {...props}>
        {text}
      </ButtonCustom>
    </>
  )
}

Button.protoTypes = {
  type: propTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: propTypes.node.isRequired,
  text: propTypes.string.isRequired
}