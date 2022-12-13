import React from 'react';
import { Button, ButtonWrapper } from './styled';

const Okbutton = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        {children}
        <span>
          <svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
        </span>
      </Button>
      <div>press<strong>Enter ↵</strong></div>
    </ButtonWrapper>
  );
}

export default Okbutton;
