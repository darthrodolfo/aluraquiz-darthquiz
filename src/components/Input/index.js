import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 200;
  //border: 4px solid white;
  //position: relative;
  //border-bottom: 4px solid;
  //border-image: linear-gradient(to right, ${({ theme }) => theme.colors.primaryGradientStart}, ${({ theme }) => theme.colors.primaryGradientEnd}) 1 100%;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  ::placeholder {
    color: white;
    opacity: 0.8;
  }
`;



export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};