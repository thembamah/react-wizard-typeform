import React from "react";
import { SectionWrapper, Text } from './styled';
import { Centerbutton } from 'app/form-builder/form-components';

const Section = ({ content, onNextStep, hideNextButton }) => {
  
  return (
    <SectionWrapper>
      {content.map((item, index) => (
        <Text key={index}>{item.value}</Text>
      ))}

      {!hideNextButton &&
        <Centerbutton onClick={onNextStep}>Get Started</Centerbutton>
      }
    </SectionWrapper>
  );
}

export default Section;

