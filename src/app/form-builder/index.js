import React, { useState } from 'react';
import stepsData from 'app/utils/stepsData';
import { FormBuilderWrapper, StepWrapper } from './styled';
import { Section, Question } from './form-sections';
import { useForm } from "react-hook-form";

const FormBuilder = () => {
  const { register, control, watch, setValue, getValues } = useForm();
  const [currentIndexForm, setCurrentIndexForm] = useState(0);

  console.log(watch());

  const generateFormStep = (step) => {
    switch (step.type) {
      case 'section':
        return (
          <Section
            content={step.content}
            onNextStep={() => setCurrentIndexForm(currentIndexForm + 1)}
          />
        )
      case 'question':
        return (
          <Question
            control={control}
            setValue={setValue}
            getValues={getValues}
            register={register}
            questionId={step.question_id}
            title={step.title}
            content={step.content} 
            onPrevStep={() => setCurrentIndexForm(currentIndexForm - 1)}
            onNextStep={() => setCurrentIndexForm(currentIndexForm + 1)}
          />
        )
      default:
        break;
    }
  }

  return (
    <FormBuilderWrapper>
      {stepsData.map((step, index) => 
        <StepWrapper key={index} active={index === currentIndexForm}>
          {generateFormStep(step)}
        </StepWrapper>  
      )}
    </FormBuilderWrapper>
  );
}

export default FormBuilder;
