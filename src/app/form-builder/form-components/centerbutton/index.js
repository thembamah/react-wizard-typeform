import React from 'react';
import { Button, ButtonWrapper } from './styled';

const Centerbutton = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        {children}
      </Button>
      <div>press <strong>Enter ↵</strong></div>
    </ButtonWrapper>
  );
}

export default Centerbutton;
